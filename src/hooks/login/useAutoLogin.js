import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { userStore } from "../../stores/userStore";
import {
  getLocalUserData,
  removeLocalData,
  setLocalData,
} from "../../utils/LocalStorageController";
import UserController from "../../apis/user.controller";
import { HOME_PATH } from "../../pages/HomePage";

export const ACCESS_TOKEN_LOCAL_KEY = "accessToken";
export const REFRESH_TOKEN_LOCAL_KEY = "refreshToken";
export const USER_ID_LOCAL_KEY = "userId";

const useAutoLogin = () => {
  const { changeIsLogin, changeUserId } = userStore((state) => state);

  const [loading, setLoading] = useState(true);

  const resetDataAndGoHome = () => {
    removeLocalData();
    setLoading(false);
  };

  const autoLogin = async () => {
    setLoading(true);
    const localData = getLocalUserData();

    const isAllDataExist = Object.values(localData).every(
      (value) => value
    );

    if (!isAllDataExist) {
      console.log("자동 로그인 실패: 데이터가 없습니다.");
      resetDataAndGoHome();
      return;
    }

    let res;
    try {
      res = await UserController.autoLogin(localData);
    } catch (error) {
      console.error(error);
      console.log("자동 로그인 실패");
      if (error.response.status === 404) {
        console.log("토큰 만료");
      }
      resetDataAndGoHome();
      return;
    } finally {
      setLoading(false);
    }

    const { userId, token } = res.data;
    const { accessToken, refreshToken } = token;

    setLocalData({ accessToken, refreshToken, userId });
    changeIsLogin(true);
    changeUserId(userId);
  };

  useEffect(() => {
    console.log("자동 로그인 시도");
    autoLogin();
  }, []);

  return { loading };
};

export default useAutoLogin;
