import React from "react";
import InputComp from "../components/common/input/InputComp";
import ButtonComp from "../components/common/button/ButtonComp";
import { useSignUp } from "../hooks/login/useSignUp";
import { G_MARKET_FONT } from "../constants/FontFamily";
import ComboBox from "../components/common/input/ComboBox";
import { MAJOR } from "../constants/Major";
import { Spin } from "antd";

const SIGNUP_PATH = "/signup";

function SignUpPage(props) {
  const {
    signupFormState,
    rePassword,
    isValid,
    onChange,
    onChangeMajor,
    onSubmit,
    isLoading,
    errorMessage,
  } = useSignUp();

  return (
    <div className={"mobile:h-auto flex flex-col justify-center items-center"}>
      <h1
        className={
          "text-6xl my-5 font-bold flex justify-center mobile:text-4xl"
        }
        style={{ fontFamily: G_MARKET_FONT }}
      >
        회원 가입
      </h1>
      <div className={"w-96 items-center justify-center mobile:w-full"}>
        <InputComp
          value={signupFormState.email}
          name={"email"}
          onChange={onChange}
          placeholder={"인증코드를 보낸 이메일을 입력해 주세요"}
        />
        <span style={{ color: "red" }}>
          {!isValid.email_blank && "이메일을 입력해주세요."}
        </span>
        <span style={{ color: "red" }}>
          {!isValid.email && "이메일 형식이 올바르지 않습니다."}
        </span>

        <InputComp
          value={signupFormState.code}
          name={"code"}
          onChange={onChange}
          placeholder={"E-mail로 받은 인증코드를 입력하세요"}
        />
        <span style={{ color: "red" }}>
          {!isValid.code && "인증코드는 6자리 숫자입니다."}
        </span>

        <InputComp
          value={signupFormState.password}
          name={"password"}
          onChange={onChange}
          placeholder={"비밀번호를 입력하세요"}
          type={"password"}
        />
        <span style={{ color: "red" }}>
          {!isValid.password && "비밀번호는 8자리 이상 이여야 합니다."}
        </span>
        <span style={{ color: "red" }}>
          {!isValid.password_blank && "비밀번호를 입력해주세요."}
        </span>

        <InputComp
          value={rePassword}
          name={"rePassword"}
          onChange={onChange}
          placeholder={"비밀번호를 다시 입력하세요"}
          type={"password"}
        />
        {!isValid.rePassword && (
          <span style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</span>
        )}

        <InputComp
          value={signupFormState.nickname}
          name={"nickname"}
          onChange={onChange}
          placeholder={"이름을 입력하세요"}
        />
        <span style={{ color: "red" }}>
          {!isValid.nickname_blank && "이름을 입력해주세요."}
        </span>

        <ComboBox
          value={signupFormState.major}
          onChange={onChangeMajor}
          options={MAJOR}
        />
        <ButtonComp text={"회원가입"} onClick={onSubmit} className={""} />
        <div className={"text-red-600 text-center mb-10"}>{errorMessage}</div>
        <Spin fullscreen={true} spinning={isLoading} />
      </div>
    </div>
  );
}

export { SignUpPage, SIGNUP_PATH };
