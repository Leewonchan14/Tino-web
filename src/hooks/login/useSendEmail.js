import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SIGNUP_PATH } from "../../pages/SignUpPage";
import EmailController from "../../apis/email.controller";

export const useSendEmail = (initState) => {
  const navigate = useNavigate();

  const GoSignUpForm = () => {
    navigate(SIGNUP_PATH);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const checkEmail = (email) => {
    const emailReg = /^[a-zA-Z0-9._%+-]+@tukorea.ac.kr$/;
    return emailReg.test(email);
  };

  const [email, setEmail] = useState(initState);
  const [isFetching, setIsFetching] = useState(false);
  const [message, setMessage] = useState("");

  const requestAuthCode = async () => {
    if (!checkEmail(email)) {
      setMessage("이메일 형식이 올바르지 않습니다.");
      return;
    }

    setIsFetching(true);

    try {
      await EmailController.requestAuthCode(email);
      navigate(SIGNUP_PATH, { state: { email } });
    } catch (err) {
      console.error(err);

      if (err.response.status === 404) {
        setMessage(err.response.data.message);
        return;
      }
      if (err.response.status === 500) {
        setMessage("서버 오류입니다. 잠시 후 다시 시도해주세요.");
        return;
      }
      setMessage("알 수 없는 오류입니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsFetching(false);
    }
  };
  return {
    email,
    onChangeEmail,
    isFetching,
    message,
    onClickSendEmail: requestAuthCode,
    GoSignUpForm,
  };
};
