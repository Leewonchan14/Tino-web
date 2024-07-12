import Skeleton from "react-loading-skeleton";
import { uuid } from "../../utils/uuid";

export const UserInfo = ({ isFetching, user }) => {
  const MEtA_DATA = [
    { title: "닉네임", value: user?.nickname, className: "w-32" },
    { title: "이메일", value: user?.email, className: "w-96" },
    { title: "학과", value: user?.major, className: "w-80" },
  ];

  const renderUserInfo = () => {
    return MEtA_DATA.map(({ title, value, className }) => {
      let key = uuid();

      if (isFetching) {
        return <Skeleton key={key} containerClassName={className} />;
      }

      return (
        <div key={key}>
          {title} : {value}
        </div>
      );
    });
  };

  return (
    <div
      className={
        "flex flex-col flex-1 justify-center font-G_MARKET text-xl gap-3 " +
        "mobile:text-lg"
      }
    >
      {renderUserInfo()}
    </div>
  );
};
