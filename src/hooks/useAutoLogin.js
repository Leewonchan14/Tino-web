import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import UserController from "../api/user.controller";
import {HOME_PATH} from "../pages/Home";

const useAutoLogin = () => {
    let navigate = useNavigate();

    let preAccessToken = localStorage.getItem("AccessToken");
    let preRefreshToken = localStorage.getItem("RefreshToken");
    let preUserId = localStorage.getItem("userId");

    const [loading, setLoading] = useState(true);

    const autoLogin = async () => {
        setLoading(true);

        const GO_HOME_PAGE = () => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("userId");
            setLoading(false);
            navigate(HOME_PATH);
        };

        if (!preUserId || !preAccessToken || !preRefreshToken) {
            GO_HOME_PAGE();
            return;
        }

        let res;
        try {
            res = await UserController.autoLogin({
                userId: preUserId,
                accessToken: preAccessToken,
                refreshToken: preRefreshToken
            });
        } catch (error) {
            GO_HOME_PAGE();
            return;
        }

        const {isSuccess, userId, token} = res.data;
        const {accessToken, refreshToken} = token;

        // 로그인 페이지로 이동
        if (!isSuccess) {
            GO_HOME_PAGE();
            return;
        }

        localStorage.setItem("userId", userId);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        setLoading(false);
    };

    useEffect(() => {
        console.log("자동 로그인 시도");
        // 토큰이 있다면 자동로그인 요청
        autoLogin();
    }, []);

    return {loading};
};

export default useAutoLogin;