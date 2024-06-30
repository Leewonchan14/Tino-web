import { useState } from "react";
import UserController from "../../apis/user.controller";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../pages/HomePage";
import { delayFetch } from "../../utils/delay";
import { userStore } from "../../stores/userStore";
import {
  ACCESS_TOKEN_LOCAL_KEY,
  REFRESH_TOKEN_LOCAL_KEY,
  USER_ID_LOCAL_KEY,
} from "./useAutoLogin";

const useLogin = () => {
  let navigate = useNavigate();
  const { changeUserId } = userStore((state) => state);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const [isValidState, setIsValidState] = useState({
    email: true,
    email_blank: true,
    password: true,
  });

  const regs = {
    email: /^[a-zA-Z0-9._%+-]+@tukorea.ac.kr$/,
    password: /^.{8,}$/,
    notBlank: /^.+$/,
  };

  const onChange = (e) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };

  const isAllStateValid = () => {
    let checkedState = {
      email: regs.email.test(loginState.email),
      email_blank: regs.notBlank.test(loginState.email),
      password: regs.password.test(loginState.password),
    };

    setIsValidState(checkedState);

    return Object.values(checkedState).every((value) => value);
  };

  const { changeIsLogin } = userStore((state) => state);

  const onSubmit = async () => {
    setErrorMessage("");
    const isAllValid = isAllStateValid();

    if (!isAllValid) {
      setErrorMessage("입력값이 올바르지 않습니다.");
      return;
    }

    let response;

    setIsLoading(true);

    try {
      response = await delayFetch({
        fetcherPromise: UserController.login({ ...loginState }),
        milliseconds: 1000,
      });
    } catch (err) {
      console.error(err);
      if (err.response.status === 404) {
        setErrorMessage(err.response.data.message);
        return;
      }

      setErrorMessage(
        "알수 없는 오류가 발생했습니다. 잠시후 다시 시도해주세요."
      );
      return;
    } finally {
      setIsLoading(false);
    }

    const { userId } = response.data;
    const { accessToken, refreshToken } = response.data.token;

    localStorage.setItem(ACCESS_TOKEN_LOCAL_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_LOCAL_KEY, refreshToken);
    localStorage.setItem(USER_ID_LOCAL_KEY, userId);

    changeIsLogin(true);
    changeUserId(userId);
    navigate(HOME_PATH);
  };

  return {
    loginState,
    errorMessage,
    isLoading,
    isValid: isValidState,
    onChange,
    onSubmit,
  };
};

export { useLogin };
