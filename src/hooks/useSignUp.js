import {useState} from "react";

const MAJOR = [
    {value: "소프트웨어학과"},
    {value: "컴퓨터공학과"},
    {value: "인공지능학과"},
    {value: "게임공학과"},
    {value: "산업경영학과"},
    {value: "IT경영학과"},
    {value: "데이터사이언스경영학과"},
    {value: "글로벌융합공학과"},
    {value: "기계공학과"},
    {value: "기계설계공학과"},
    {value: "나노반도체공학과"},
    {value: "메카트로닉스학과"},
    {value: "AI로봇학과"},
    {value: "산업디자인공학과"},
    {value: "미디어디자인학과"},
    {value: "생명화학공학과"},
    {value: "신소재공학과"},
    {value: "에너지전기공학과"},
    {value: "지식융합학과"},
    {value: "전자공학과"},
    {value: "임베디드시스템학과"},
];

export const useSignUp = () => {
    const [signupFormState, setSignupFormState] = useState({
        email: "",
        password: "",
        nickname: "",
        major: MAJOR[0].value,
        code: ""
    })

    const [isValid, setIsValid] = useState({
        email: true,
        email_blank: true,
        password: true,
        password_blank: true,
        rePassword: true,
        nickname: true,
        nickname_blank: true,
        code: true
    })

    const regs = {
        email: /^[a-zA-Z0-9._%+-]+@tukorea.ac.kr$/,
        password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
        notBlank: /^.+$/,
        code: /^[0-9]{6}$/
    }

    const [rePassword, setRePassword] = useState("");

    const CheckValid = async () => {
        return new Promise((resolve, reject) => {
            setIsValid((stat) => {
                let newData = {
                    ...isValid,
                    email: regs.email.test(signupFormState.email),
                    email_blank: regs.notBlank.test(signupFormState.email),
                    password: regs.password.test(signupFormState.password),
                    password_blank: regs.notBlank.test(signupFormState.password),
                    nickname_blank: regs.notBlank.test(signupFormState.nickname),
                    code: regs.code.test(signupFormState.code),
                }

                resolve(newData);

                return newData;
            });
        });
    }

    const onSubmit = async () => {
        let validState = await CheckValid();

        const allValid = Object.entries(validState).every(([key, value]) => {
            return value
        });

        if (!allValid) {
            console.log("입력값이 올바르지 않습니다.")
            return
        }


        console.log("회원가입 요청")
    }


    const onChange = (e) => {
        if (e.target.name === "rePassword") {
            setRePassword(e.target.value)
            setIsValid({
                ...isValid,
                rePassword: signupFormState.password === e.target.value
            })
            return
        }

        setSignupFormState({
            ...signupFormState,
            [e.target.name]: e.target.value
        })

        if (e.target.name === "password") {
            setIsValid({
                ...isValid,
                rePassword: rePassword === e.target.value
            })
        }
    }

    return {signupFormState, rePassword, MAJOR, isValid, onChange, onSubmit};
}