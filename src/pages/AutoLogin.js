import useAutoLogin from "../hooks/useAutoLogin";

const AutoLogin = () => {
    let {loading} = useAutoLogin();

    if (loading) return null;
}

export default AutoLogin;