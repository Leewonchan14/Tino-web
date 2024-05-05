import React from 'react';
import {InputComp} from "../components/InputComp";
import {useSendEmail} from "../hooks/useSendEmail";

const EMAIL_PAGE_PATH = "/email/auth";


function SignUpButton({isFetching, text, onClick}) {
    return (
        <button disabled={isFetching} style={{fontFamily: "GmarketSans"}}
                className={"w-full h-[3.5rem] p-[5px] my-[10px] bg-blue-600 text-white font-bold text-xl border-1 rounded-xl"}
                onClick={onClick}>
            {!isFetching && text}
            {isFetching && "전송중..."}
        </button>
    );
}


function EmailCode(props) {
    const [email, onChangeEmail, isFetching, message, onClickSendEmail, GoSignUpForm] = useSendEmail("");

    return (
        <div className={"h-[70%] flex justify-center"}>
            <div className={"w-[50%] "}>
                <h1 className={"text-6xl my-12 font-bold flex justify-center"}
                    style={{fontFamily: "GmarketSans"}}>이메일 인증
                </h1>
                <span className={"flex justify-center"}>@tukorea.ac.kr 인 도메인만 사용 가능합니다.</span>
                <div className={"flex"}>
                    <InputComp value={email} onChange={onChangeEmail} placeholder={"E-mail 을 입력하세요"}/>
                    <div className={"w-[20%] ml-12"}>
                        <SignUpButton isFetching={isFetching}
                                      onClick={onClickSendEmail}
                                      text={"코드 발송"}
                                      className={"!text-sm"}/>
                    </div>
                </div>

                <div style={{fontFamily: "GmarketSans"}}
                     className={"text-red-600 text-center"}>
                    {message}
                </div>

                <div className={"mt-4 w-full flex justify-center"}>
                    이미 이메일을 받으셨나요?
                    <button onClick={GoSignUpForm} className={"ml-4 text-blue-600"}>회원가입 하러 가기</button>
                </div>
            </div>
        </div>
    );
}

export {EmailCode, EMAIL_PAGE_PATH};