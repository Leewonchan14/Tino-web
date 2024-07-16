import { userStore } from "../../stores/userStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HOME_PATH } from "../../pages/HomePage";
import { getLocalUserData } from "../../utils/LocalStorageController";
import useAutoLogin from "../login/useAutoLogin";

const useMyPage = () => {
  let { isLogin } = userStore((state) => state);
  let { loading } = useAutoLogin();
  let { userId } = getLocalUserData();
  let navigate = useNavigate();

  useEffect(() => {
    if (userId === null && isLogin === false) {
      window.alert("로그인이 필요합니다.");
      navigate(HOME_PATH);
    }
  }, [loading]);
};

export default useMyPage;
