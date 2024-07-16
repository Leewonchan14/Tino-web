import { userStore } from "../../stores/userStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { HOME_PATH } from "../../pages/HomePage";

const useMyPage = () => {
  let { isLogin } = userStore((state) => state);

  let navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      window.alert("로그인이 필요합니다.");
      navigate(HOME_PATH);
    }
  }, []);
};

export default useMyPage;
