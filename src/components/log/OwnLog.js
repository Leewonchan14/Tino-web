import { useGetOwnLog } from "../../hooks/log/useGetOwnLog";
import { G_MARKET_FONT } from "../../constants/FontFamily";
import React from "react";
import ExistOwnLog from "./atoms/ExistOwnLog";
import { Spin } from "antd";

const OwnLog = ({ gameId }) => {
  let { ownLogState, isExist, isFetching, isLogin } = useGetOwnLog({ gameId });

  return (
    <div
      className={
        "w-52 border-r-2 flex justify-center items-center " +
        "mobile:border-r-0 mobile:border-b-2 mobile:w-full mobile:h-20"
      }
    >
      <SwitchLogComp
        isFetching={isFetching}
        ownLogState={ownLogState}
        isExist={isExist}
        isLogin={isLogin}
      />
    </div>
  );
};

const SwitchLogComp = ({ ownLogState, isFetching, isLogin, isExist }) => {
  if (!isLogin) {
    return <IsNotLogIn />;
  }

  if (isFetching) {
    return <Spin spinning={true} size={"large"} />;
  }

  if (isExist) {
    return <ExistOwnLog ownLogState={ownLogState} />;
  }

  return <OwnLogNotExist />;
};

const IsNotLogIn = () => {
  return (
    <div
      className={"mx-1 flex w-44 flex-col justify-center items-center h-full "}
    >
      <div
        style={{ fontFamily: G_MARKET_FONT }}
        className={"text-3xl text-center"}
      >
        로그인이 <br /> 필요합니다.
      </div>
    </div>
  );
};

const OwnLogNotExist = () => {
  return (
    <div
      className={"mx-1 flex w-44 flex-col justify-center items-center h-full "}
    >
      <div
        style={{ fontFamily: G_MARKET_FONT }}
        className={"text-3xl text-center"}
      >
        게임기록이 <br /> 없습니다.
      </div>
    </div>
  );
};

export default OwnLog;
