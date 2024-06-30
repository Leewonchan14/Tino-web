import { useState } from "react";
import { MAJOR } from "../../constants/Major";
import { useLocation, useNavigate } from "react-router-dom";
import UserController from "../../apis/user.controller";
import { LOGIN_PATH } from "../../pages/LoginPage";

export const useSignUp = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const email = location?.state?.email || "";

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [signupFormState, setSignupFormState] = useState({
    email: email,
    password: "",
    nickname: "",
    major: MAJOR[0].value,
    code: "",
  });

  const [isValid, setIsValid] = useState({
    email: true,
    email_blank: true,
    password: true,
    password_blank: true,
    rePassword: true,
    nickname: true,
    nickname_blank: true,
    code: true,
  });

  const regs = {
    email: /^[a-zA-Z0-9._%+-]+@tukorea.ac.kr$/,
    password: /^.{8,}$/,
    notBlank: /^.+$/,
    code: /^[0-9]{6}$/,
  };

  const [rePassword, setRePassword] = useState("");

  const CheckValid = async () => {
    return new Promise((resolve, reject) => {
      setIsValid((stat) => {
        let newData = {
          ...isValid,
          email: regs.email.test(signupFormState.email),
          email_blank: regs.notBlank.test(signupFormState.email),
          password: regs.password.test(signupFormState.password),
          password_blank: regs.notBlank.test(signupFormState.password),
          nickname_blank: regs.notBlank.test(signupFormState.nickname),
          code: regs.code.test(signupFormState.code),
        };

        resolve(newData);

        return newData;
      });
    });
  };

  const onSubmit = async () => {
    let validState = await CheckValid();

    const allValid = Object.entries(validState).every(([key, value]) => value);

    if (!allValid) {
      setErrorMessage("입력값이 올바르지 않습니다.");
      return;
    }

    setIsLoading(true);

    try {
      await UserController.signUp({ ...signupFormState });
    } catch (err) {
      console.error(err);
      if (err.response.status === 404) {
        setErrorMessage(err.response.data.message);
        return;
      }
      if (err.response.status === 500) {
        setErrorMessage("서버 오류입니다. 잠시 후 다시 시도해주세요.");
        return;
      }
      setErrorMessage("알 수 없는 오류입니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
    navigate(LOGIN_PATH);
  };

  const onChange = (e) => {
    if (e.target.name === "rePassword") {
      setRePassword(e.target.value);
      setIsValid({
        ...isValid,
        rePassword: signupFormState.password === e.target.value,
      });
      return;
    }

    setSignupFormState({
      ...signupFormState,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "password") {
      setIsValid({
        ...isValid,
        rePassword: rePassword === e.target.value,
      });
    }
  };

  const onChangeMajor = (e) => {
    setSignupFormState({
      ...signupFormState,
      major: e.target.value,
    });
  };

  return {
    signupFormState,
    rePassword,
    onChangeMajor,
    isValid,
    onChange,
    onSubmit,
    isLoading,
    errorMessage,
  };
};
