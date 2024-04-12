import React from 'react';
import IdPasswordComp from "../components/IdPasswordComp";
import ButtonComp from "../components/ButtonComp";

function SignUp(props) {
    return (
        <div className={"h-[70%] flex justify-center"}>
            <div className={"w-[50%] "}>
                <h1 className={"text-6xl my-12 font-bold flex justify-center"}
                    style={{fontFamily: "GmarketSans"}}>이메일 인증
                </h1>
                <span className={"flex justify-center"}>@tukorea.ac.kr 인 도메인만 사용 가능합니다.</span>
                <div className={"flex"}>
                    <IdPasswordComp placeholder={"E-mail 을 입력하세요"}/>
                    <div className={"w-[20%]"}>
                        <ButtonComp text={"인증코드 발송"} className={"!text-sm"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;