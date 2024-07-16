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
import { isValidate } from "../../utils/validator/validator";
import { EMAIL_FORMAT } from "../../utils/validator/email";
import { PASSWORD_FORMAT } from "../../utils/validator/password";

const useLogin = () => {
  let navigate = useNavigate();
  const { changeUserId } = userStore((state) => state);
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    total: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
  });

  const LOG_IN_INPUT_LIST = [
    {
      name: "email",
      inputShould: EMAIL_FORMAT,
      placeholder: "이메일을 입력해 주세요",
    },
    {
      name: "password",
      inputShould: PASSWORD_FORMAT,
      placeholder: "비밀번호를 입력하세요",
      type: "password",
    },
  ];

  const onChange = (e) => {
    let { name, value } = e.target;
    let findInput = LOG_IN_INPUT_LIST.find(
      (input) => input.name === name
    );
    let { isValid: nextValid, errorMessage: nextErrorMessage } =
      isValidate({ value, should: findInput.inputShould });

    setLoginState((pre) => ({
      ...pre,
      [name]: value,
    }));

    setIsValid((pre) => ({
      ...pre,
      [name]: nextValid,
    }));

    setErrorMessage((pre) => ({
      ...pre,
      [name]: nextErrorMessage,
    }));
  };

  const isAllValid = () => {
    let { total, ...nextIsValid } = isValid;
    return Object.values(nextIsValid).every((value) => value);
  };

  const { changeIsLogin } = userStore((state) => state);

  const onSubmit = async () => {
    setErrorMessage({
      ...errorMessage,
      total: "",
    });

    if (!isAllValid()) {
      setErrorMessage((pre) => ({
        ...pre,
        total: "입력값이 올바르지 않습니다.",
      }));
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
      let message;

      if (err.response.status === 404) {
        message = err.response.data.message;
      } else {
        message =
          "알수 없는 오류가 발생했습니다. 잠시후 다시 시도해주세요.";
      }
      setErrorMessage((pre) => ({
        ...pre,
        total: message,
      }));
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
    LOG_IN_INPUT_LIST,
    loginState,
    errorMessage,
    isLoading,
    isValid,
    onChange,
    onSubmit,
  };
};

export { useLogin };
