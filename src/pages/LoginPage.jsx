import React from "react";
import { useNavigate } from "react-router-dom";
import InputComp from "../components/common/input/InputComp";
import ButtonComp from "../components/common/button/ButtonComp";
import { AUTH_EMAIL_PAGE_PATH } from "./AuthEmailCodePage";
import { useLogin } from "../hooks/login/useLogin";
import { G_MARKET_FONT } from "../constants/FontFamily";

const LOGIN_PATH = "/login";

function LoginPage(...rest) {
  let navigate = useNavigate();

  let { loginState, isValid, onChange, onSubmit } = useLogin();

  const goSignUp = () => {
    navigate(AUTH_EMAIL_PAGE_PATH);
  };

  return (
    <div className={"h-[70%] flex flex-col justify-center items-center"}>
      <h1
        className={
          "text-6xl mobile:text-5xl my-12 font-bold flex justify-center"
        }
        style={{ fontFamily: G_MARKET_FONT }}
      >
        로그인
      </h1>
      <div className={"w-96 flex flex-col items-center mobile:w-full"}>
        <InputComp
          value={loginState.email}
          onChange={onChange}
          name={"email"}
          placeholder={"E-mail 을 입력하세요"}
        />
        <span style={{ color: "red" }}>
          {!isValid.email && "이메일 형식이 올바르지 않습니다."}
        </span>
        <span style={{ color: "red" }}>
          {!isValid.email_blank && "이메일을 입력해주세요."}
        </span>

        <InputComp
          value={loginState.password}
          onChange={onChange}
          name={"password"}
          placeholder={"비밀번호를 입력하세요"}
          type={"password"}
        />
        <span style={{ color: "red" }}>
          {!isValid.password && "비밀번호는 8자리 이상 이어야 합니다."}
        </span>

        <ButtonComp text={"로그인"} onClick={onSubmit} />
        <div className={"mt-4 w-full flex justify-center"}>
          계정이 없으신가요?
          <button onClick={goSignUp} className={"ml-4 text-blue-600"}>
            회원가입 하러 가기
          </button>
        </div>
      </div>
    </div>
  );
}

export { LoginPage, LOGIN_PATH };
