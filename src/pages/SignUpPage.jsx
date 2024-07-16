import React from "react";
import InputComp from "../components/common/input/InputComp";
import ButtonComp from "../components/common/button/ButtonComp";
import { useSignUp } from "../hooks/login/useSignUp";
import ComboBox from "../components/common/input/ComboBox";
import { MAJOR } from "../constants/Major";
import { Spin } from "antd";

const SIGNUP_PATH = "/signup";

function SignUpPage(props) {
  const {
    signupFormState,
    isValid,
    SIGN_UP_FORM_INPUT_LIST,
    onChange,
    onSubmit,
    isLoading,
    errorMessage,
  } = useSignUp();

  return (
    <div
      className={
        "mobile:h-auto flex flex-col justify-center items-center"
      }
    >
      <h1
        className={
          "font-G_MARKET text-6xl my-5 font-bold flex justify-center mobile:text-4xl"
        }
      >
        회원 가입
      </h1>
      <div
        className={"w-96 items-center justify-center mobile:w-full"}
      >
        {SIGN_UP_FORM_INPUT_LIST.map(
          ({ name, placeholder, type }, index) => {
            return (
              <p key={name}>
                <InputComp
                  value={signupFormState[name]}
                  name={name}
                  type={type}
                  onChange={onChange}
                  placeholder={placeholder}
                />
                <ErrorMessage
                  isValid={isValid[name]}
                  message={errorMessage[name]}
                />
              </p>
            );
          }
        )}
        <ComboBox
          value={signupFormState.major}
          onChange={onChange}
          options={MAJOR}
        />
        <ButtonComp text={"회원가입"} onClick={onSubmit} />
        <div className={"flex justify-center"}>
          <ErrorMessage
            isValid={false}
            message={errorMessage.total}
          />
        </div>
        <Spin fullscreen={true} spinning={isLoading} />
      </div>
    </div>
  );
}

const ErrorMessage = ({ isValid, message }) => {
  return (
    <span className={"text-red-600"}>{!isValid && message}</span>
  );
};

export { SignUpPage, SIGNUP_PATH };
