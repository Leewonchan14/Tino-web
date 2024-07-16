import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SIGNUP_PATH } from "../../pages/SignUpPage";
import EmailController from "../../apis/email.controller";
import { isValidate } from "../../utils/validator/validator";
import { EMAIL_FORMAT } from "../../utils/validator/email";
import { delayFetch } from "../../utils/delay";

export const useSendEmail = (initState) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(initState);
  const [isFetching, setIsFetching] = useState(false);
  const [message, setMessage] = useState("");

  const GoSignUpForm = () => {
    navigate(SIGNUP_PATH);
  };

  const onChangeEmail = (e) => {
    let { value } = e.target;
    setEmail(e.target.value);
    let { errorMessage } = checkEmail(value);
    setMessage(errorMessage);
  };

  const checkEmail = (value) => {
    return isValidate({
      value,
      should: EMAIL_FORMAT,
    });
  };

  const requestAuthCode = async () => {
    if (!checkEmail(email).isValid) {
      setMessage("이메일 형식이 올바르지 않습니다.");
      return;
    }

    setIsFetching(true);

    try {
      await delayFetch({
        fetcherPromise: EmailController.requestAuthCode(email),
        milliseconds: 500,
      });
      navigate(SIGNUP_PATH, { state: { email } });
    } catch (err) {
      console.error(err);
      let nMessage =
        "알 수 없는 오류입니다. 잠시 후 다시 시도해주세요.";
      switch (err.response.status) {
        case 404:
          nMessage = err.response.data.message;
          break;
        case 500:
          nMessage = "서버 오류입니다. 잠시 후 다시 시도해주세요.";
          break;
        default:
          break;
      }
      setMessage(nMessage);
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
