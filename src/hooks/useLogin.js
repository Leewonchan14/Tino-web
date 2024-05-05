import {useState} from "react";

const useLogin = () => {

    const [loginState, setLoginState] = useState({
        email: "",
        password: ""
    })

    const onChange = (e) =>{
        setLoginState({
            ...loginState,
            [e.target.name]: e.target.value
        })
    }

    return {loginState, onChange}
}


export {useLogin};