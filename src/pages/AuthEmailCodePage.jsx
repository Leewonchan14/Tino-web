import React from "react";
import InputComp from "../components/common/input/InputComp";
import { useSendEmail } from "../hooks/login/useSendEmail";
import { G_MARKET_FONT } from "../constants/FontFamily";
import { Spin } from "antd";

const AUTH_EMAIL_PAGE_PATH = "/email/auth";

function AuthEmailCodePage(props) {
  const {
    email,
    onChangeEmail,
    isFetching,
    message,
    onClickSendEmail,
    GoSignUpForm,
  } = useSendEmail("");

  return (
    <div className={"h-[70%] flex flex-col items-center"}>
      <h1
        className={
          "text-6xl mobile:text-4xl my-12 font-bold flex justify-center"
        }
        style={{ fontFamily: G_MARKET_FONT }}
      >
        이메일 인증
      </h1>
      <span className={"flex justify-center"}>
        @tukorea.ac.kr 인 도메인만 사용 가능합니다.
      </span>
      <div className={"flex mobile:w-full"}>
        <InputComp
          value={email}
          onChange={onChangeEmail}
          placeholder={"E-mail 을 입력하세요"}
        />
        <SignUpButton
          isFetching={isFetching}
          onClick={onClickSendEmail}
          text={"코드 발송"}
          className={"!text-lg !w-32 !ml-8"}
        />
      </div>

      <div
        style={{ fontFamily: G_MARKET_FONT }}
        className={"text-red-600 text-center"}
      >
        {message}
      </div>

      <div className={"mt-4 w-full flex justify-center"}>
        이미 이메일을 받으셨나요?
        <button onClick={GoSignUpForm} className={"ml-4 text-blue-600"}>
          회원가입 하러 가기
        </button>
      </div>
    </div>
  );
}

function SignUpButton({ isFetching, text, onClick, className }) {
  return (
    <button
      disabled={isFetching}
      style={{ fontFamily: G_MARKET_FONT }}
      className={
        "w-full h-[3.5rem] p-[5px] my-[10px] bg-blue-600 text-white font-bold text-xl border-1 rounded-xl " +
        className
      }
      onClick={onClick}
    >
      {!isFetching && text}
      <Spin spinning={isFetching} fullscreen={true} />
      {isFetching && "전송중..."}
    </button>
  );
}

export { AuthEmailCodePage, AUTH_EMAIL_PAGE_PATH };
