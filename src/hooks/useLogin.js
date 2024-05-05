import {useState} from "react";

const useLogin = () => {

    const [loginState, setLoginState] = useState({
        email: "",
        password: ""
    })

    const [isValid, setIsValid] = useState({
        email: true,
        email_blank: true,
        password: true,
    })

    const regs = {
        email: /^[a-zA-Z0-9._%+-]+@tukorea.ac.kr$/,
        password: /^.{8,}$/,
        notBlank: /^.+$/
    }

    const onChange = (e) => {
        setLoginState({
            ...loginState,
            [e.target.name]: e.target.value
        })
    }

    const checkValid = async () => {
        return new Promise((resolve, reject) => {
            setIsValid((state) => {
                let newData = {
                    ...isValid,
                    email: regs.email.test(loginState.email),
                    email_blank: regs.notBlank.test(loginState.email),
                    password: regs.password.test(loginState.password),
                }
                resolve(newData);
                return newData;
            });
        });
    }

    const onSubmit = async () => {
        let newVar = await checkValid();
        const allValid = Object.entries(newVar).every(([key, value]) => {
            return value;
        });

        if (!allValid) {
            console.log("입력값이 올바르지 않습니다.")
            return
        }

        console.log("로그인 요청")
    }

    return {loginState, isValid, onChange, onSubmit}
}


export {useLogin};