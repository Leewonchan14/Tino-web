import {useState} from "react";
import {MAJOR} from "../../constants/Major";

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
        password: /^.{8,}$/,
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