import { useGetUser } from "../hooks/header/useGetUser";
import { ProfileImage } from "../components/mypage/ProfileImage";
import { UserInfo } from "../components/mypage/UserInfo";
import { removeLocalData } from "../utils/LocalStorageController";
import { useLocation, useNavigate } from "react-router-dom";
import { userStore } from "../stores/userStore";
import { HOME_PATH } from "./HomePage";

export const MY_PAGE_PATH = "/mypage";

export const MyPage = () => {
  let { isFetching, user } = useGetUser();
  let navigate = useNavigate();
  const { changeIsLogin } = userStore((state) => state);
  return (
    <>
      <div className={"mt-32 gap-6 flex mobile:flex-col"}>
        <ProfileImage
          isFetching={isFetching}
          profileImageURL={user?.profileImageURL}
        />
        <UserInfo isFetching={isFetching} user={user} />
      </div>
      <button
        onClick={() => {
          removeLocalData();
          changeIsLogin(false);
          navigate(HOME_PATH);
        }}
      >
        로그아웃
      </button>
    </>
  );
};

const src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdw67K7dC_tAz6cwn64PyZRirAHi8Vdgd-A&s";
