import {useState} from "react";
import UserController from "../../api/user.controller";
import {useNavigate} from "react-router-dom";
import {HOME_PATH} from "../../pages/Home";

const useLogin = () => {

    let navigate = useNavigate();

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

        try {
            const response = await UserController.login({...loginState});

            const {userId} = response.data;
            const {accessToken, refreshToken} = response.data.token;

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            localStorage.setItem("userId", userId);


            navigate(HOME_PATH);
        } catch (e) {
            console.log(e);
        }
    }

    return {loginState, isValid, onChange, onSubmit}
}


export {useLogin};