import React from "react";
import { useNavigate } from "react-router-dom";
import InputComp from "../components/common/input/InputComp";
import ButtonComp from "../components/common/button/ButtonComp";
import { AUTH_EMAIL_PAGE_PATH } from "./AuthEmailCodePage";
import { useLogin } from "../hooks/login/useLogin";
import { Spin } from "antd";
import { ErrorMessage } from "./SignUpPage";

const LOGIN_PATH = "/login";

function LoginPage(...rest) {
  let navigate = useNavigate();

  let {
    LOG_IN_INPUT_LIST,
    loginState,
    errorMessage,
    isLoading,
    isValid,
    onChange,
    onSubmit,
  } = useLogin();

  return (
    <div
      className={"h-[70%] flex flex-col justify-center items-center"}
    >
      <h1
        className={
          "font-G_MARKET text-6xl mobile:text-5xl my-12 font-bold flex justify-center"
        }
      >
        로그인
      </h1>
      <div
        className={"w-96 flex flex-col items-center mobile:w-full"}
      >
        {LOG_IN_INPUT_LIST.map(({ name, placeholder, type }) => (
          <p className={"w-full"} key={name}>
            <InputComp
              value={loginState[name]}
              type={type}
              onChange={onChange}
              name={name}
              placeholder={placeholder}
            />
            <ErrorMessage
              isValid={isValid[name]}
              message={errorMessage[name]}
            />
          </p>
        ))}

        <ButtonComp text={"로그인"} onClick={onSubmit} />
        <ErrorMessage isValid={false} message={errorMessage.total} />
        <Spin fullscreen={true} spinning={isLoading} />
        <IsNotAuth />
      </div>
    </div>
  );
}

const IsNotAuth = ({ children }) => {
  let navigate = useNavigate();
  return (
    <div className={"mt-4 w-full flex justify-center"}>
      계정이 없으신가요?
      <button
        onClick={() => {
          navigate(AUTH_EMAIL_PAGE_PATH);
        }}
        className={"ml-4 text-blue-600"}
      >
        회원가입 하러 가기
      </button>
    </div>
  );
};

export { LoginPage, LOGIN_PATH };
