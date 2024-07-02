import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserController from "../../apis/user.controller";
import { userStore } from "../../stores/userStore";
import {
  getLocalUserData,
  removeLocalData,
  setLocalData,
} from "../../utils/LocalStorageController";

export const ACCESS_TOKEN_LOCAL_KEY = "AccessToken";
export const REFRESH_TOKEN_LOCAL_KEY = "RefreshToken";
export const USER_ID_LOCAL_KEY = "userId";

const useAutoLogin = () => {
  const { prePath } = useLocation();
  let navigate = useNavigate();
  const { changeIsLogin, changeUserId } = userStore((state) => state);

  const [loading, setLoading] = useState(true);

  const goPrePage = () => {
    removeLocalData();
    setLoading(false);
    navigate(prePath);
  };

  const autoLogin = async () => {
    setLoading(true);

    const localData = getLocalUserData();

    const isAllDataExist = Object.values(localData).every((value) => value);

    if (!isAllDataExist) {
      console.log("자동 로그인 실패: 데이터가 없습니다.");
      goPrePage();
      return;
    }

    // let res;
    // try {
    //   res = await UserController.autoLogin(localData);
    // } catch (error) {
    //   console.error(error);
    //   console.log("자동 로그인 실패");
    //
    //   goPrePage();
    //   return;
    // } finally {
    //   setLoading(false);
    // }

    // console.log(res.data);

    // const { userId, token } = res.data;
    // const { accessToken, refreshToken } = token;

    const { userId, accessToken, refreshToken } = localData;

    setLocalData({ accessToken, refreshToken, userId });
    changeIsLogin(true);
  };

  useEffect(() => {
    console.log("자동 로그인 시도");
    autoLogin();

    // const localData = getLocalUserData();
    // console.log(localData);
    // changeUserId(localData.userId);
    // changeIsLogin(true);
  }, []);

  return { loading };
};

export default useAutoLogin;
