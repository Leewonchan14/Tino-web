import React from 'react';
import {ComboBox, InputComp} from "../components/InputComp";
import ButtonComp from "../components/ButtonComp";
import {useSignUp} from "../hooks/useSignUp";

const SIGNUP_PATH = "/signup";

function SignUp(props) {

    const {
        signupFormState,
        rePassword,
        MAJOR,
        isValid,
        onChange,
        onSubmit

    } = useSignUp();

    return (
        <div className={"h-[70%] flex justify-center"}>
            <div className={"w-[50%] "}>
                <h1 className={"text-6xl my-5 font-bold flex justify-center"}
                    style={{fontFamily: "GmarketSans"}}>회원 가입
                </h1>
                <div className={"flex-col"}>
                    <InputComp value={signupFormState.email} name={"email"} onChange={onChange}
                               placeholder={"인증코드를 보낸 이메일을 입력해 주세요"}/>
                    <span style={{color: "red"}}>{!isValid.email_blank && "이메일을 입력해주세요."}</span>
                    <span style={{color: "red"}}>{!isValid.email && "이메일 형식이 올바르지 않습니다."}</span>


                    <InputComp value={signupFormState.code} name={"code"} onChange={onChange}
                               placeholder={"E-mail로 받은 인증코드를 입력하세요"}/>
                    <span style={{color: "red"}}>{!isValid.code && "인증코드는 6자리 숫자입니다."}</span>


                    <InputComp value={signupFormState.password} name={"password"} onChange={onChange}
                               placeholder={"비밀번호를 입력하세요"}/>
                    <span style={{color: "red"}}>{!isValid.password && "비밀번호는 8자리 이상, 영문과 숫자를 포함해야 합니다."}</span>
                    <span style={{color: "red"}}>{!isValid.password_blank && "비밀번호를 입력해주세요."}</span>


                    <InputComp value={rePassword} name={"rePassword"} onChange={onChange}
                               placeholder={"비밀번호를 다시 입력하세요"}/>
                    {!isValid.rePassword && <span style={{color: "red"}}>비밀번호가 일치하지 않습니다.</span>}


                    <InputComp value={signupFormState.nickname} name={"nickname"} onChange={onChange}
                               placeholder={"이름을 입력하세요"}/>
                    <span style={{color: "red"}}>{!isValid.nickname_blank && "이름을 입력해주세요."}</span>


                    <ComboBox value={signupFormState.major} onChange={onChange} options={MAJOR}/>
                    <ButtonComp text={"회원가입"} onClick={onSubmit}/>
                </div>

            </div>
        </div>
    );
}

export {SignUp, SIGNUP_PATH};