import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import IdPasswordComp from "../components/IdPasswordComp";
import ButtonComp from "../components/ButtonComp";

function Login(...rest) {
    let navigate = useNavigate();

    const [inputState, setInputState] = useState({
        inputUserId: "",
        inputPassword: ""
    })

    const onInputChange = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }

    const goSignUp = () => {
        navigate("/signup");
    }

    return (
        <div className={"h-[70%] flex justify-center"}>
            <div className={"w-[50%] "}>
                <h1 className={"text-6xl my-12 font-bold flex justify-center"}
                    style={{fontFamily: "GmarketSans"}}>로그인
                </h1>
                <div className={"w-full flex-col"}>
                    <IdPasswordComp value={inputState.inputUserId} onChange={onInputChange} name={"inputUserId"} placeholder={"E-mail 을 입력하세요"}/>
                    <IdPasswordComp value={inputState.inputPassword} onChange={onInputChange} name={"inputPassword"} placeholder={"비밀번호를 입력하세요"}/>
                    <ButtonComp text={"로그인"} onClick={() => {console.log("로그인 하기")}}/>
                    <div className={"mt-4 w-full flex justify-center"}>
                        계정이 없으신가요?
                        <button onClick={goSignUp} className={"ml-4 text-blue-600"}>회원가입 하러 가기</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;