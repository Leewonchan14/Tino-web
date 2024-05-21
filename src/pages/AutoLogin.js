import useAutoLogin from "../hooks/login/useAutoLogin";

const AutoLogin = () => {
    let {loading} = useAutoLogin();

    if (loading) return null;
}

export default AutoLogin;