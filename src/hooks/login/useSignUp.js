import { useState } from "react";
import { MAJOR } from "../../constants/Major";
import { useLocation, useNavigate } from "react-router-dom";
import UserController from "../../apis/user.controller";
import { LOGIN_PATH } from "../../pages/LoginPage";
import {
  GREATER_AND_SMALLER_THAN,
  isValidate,
  MATCH_PASSWORD,
  NOT_EMPTY,
  ONLY_EQUAL,
  ONLY_NUMBER,
} from "../../utils/validator/validator";
import { delayFetch } from "../../utils/delay";
import { PASSWORD_FORMAT } from "../../utils/validator/password";
import { EMAIL_FORMAT } from "../../utils/validator/email";

export const useSignUp = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const email = location?.state?.email || "";

  const [signupFormState, setSignupFormState] = useState({
    email,
    code: "",
    password: "",
    rePassword: "",
    nickname: "",
    major: MAJOR[0].value,
  });
  const SIGN_UP_FORM_INPUT_LIST = [
    {
      name: "email",
      inputShould: EMAIL_FORMAT,
      placeholder: "인증코드를 보낸 이메일을 입력해 주세요",
    },
    {
      name: "code",
      inputShould: [NOT_EMPTY, ONLY_NUMBER, ONLY_EQUAL({ num: 6 })],
      placeholder: "E-mail로 받은 인증코드를 입력하세요",
      type: "number",
    },
    {
      name: "password",
      inputShould: PASSWORD_FORMAT,
      placeholder: "비밀번호를 입력하세요",
      type: "password",
    },
    {
      name: "rePassword",
      inputShould: [
        MATCH_PASSWORD({ password: signupFormState.password }),
      ],
      placeholder: "비밀번호를 다시 입력하세요",
      type: "password",
    },
    {
      name: "nickname",
      inputShould: [
        NOT_EMPTY,
        GREATER_AND_SMALLER_THAN({ min: 2, max: 16 }),
      ],
      placeholder: "이름을 입력하세요",
    },
  ];
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    code: "",
    password: "",
    rePassword: "",
    nickname: "",
    total: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState({
    email: true,
    code: true,
    password: true,
    rePassword: true,
    nickname: true,
  });

  const checkValid = () => {
    return Object.values(isValid).every((value) => value);
  };

  const onSubmit = async () => {
    if (!checkValid()) return;

    setIsLoading(true);

    let { rePassword, ...signupForm } = signupFormState;

    try {
      await delayFetch({
        fetcherPromise: UserController.signUp({ ...signupForm }),
        milliseconds: 300,
      });
    } catch (err) {
      let message;
      switch (err.response.status) {
        case 404:
          message = err.response.data.message;
          break;
        case 500:
          message = "서버 오류입니다. 잠시 후 다시 시도해주세요.";
          break;
        default:
          message =
            "알 수 없는 오류입니다. 잠시 후 다시 시도해주세요.";
          break;
      }
      setErrorMessage({
        ...errorMessage,
        total: message,
      });
      return;
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
    navigate(LOGIN_PATH);
  };

  const onChange = (e) => {
    let { name, value } = e.target;

    setSignupFormState({
      ...signupFormState,
      [name]: value,
    });

    let findInput = SIGN_UP_FORM_INPUT_LIST.find(
      (item) => item.name === name
    );

    let { isValid: nextIsValid, errorMessage: nextErrorMessage } =
      isValidate({
        value,
        should: findInput.inputShould,
      });

    setIsValid((pre) => ({
      ...pre,
      [name]: nextIsValid,
    }));

    setErrorMessage((pre) => ({
      ...pre,
      [name]: nextErrorMessage,
    }));
  };

  return {
    signupFormState,
    SIGN_UP_FORM_INPUT_LIST,
    isValid,
    onChange,
    onSubmit,
    isLoading,
    errorMessage,
  };
};
