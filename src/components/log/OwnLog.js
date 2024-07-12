import { useGetOwnLog } from "../../hooks/log/useGetOwnLog";
import React from "react";
import ExistOwnLog from "./atoms/ExistOwnLog";
import { Spin } from "antd";

import TinoIcon from "../../assets/tino_icon.png";

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
    <>
      <div
        className={
          "flex w-full bg-primary-100 flex-col justify-center items-center h-full blur-md " +
          "mobile:h-full mobile:flex-row mobile:w-full mobile:justify-evenly mobile:items-center"
        }
      >
        <div className={"text-3xl"}>{1}</div>
        <div className={"rounded-full border-[1px] border-white overflow-clip"}>
          <img className={"h-20"} src={TinoIcon} alt="" />
        </div>
        <div className={"font-bold"}>티노</div>
        <div className={"text-2xl text-center"}>0000</div>
      </div>
      <span className={"absolute font-G_MARKET"}> 로그인이 필요합니다</span>
    </>
  );
};

const OwnLogNotExist = () => {
  return (
    <div
      className={"mx-1 flex w-44 flex-col justify-center items-center h-full "}
    >
      <div className={"text-3xl text-center font-G_MARKET"}>
        게임기록이 <br /> 없습니다.
      </div>
    </div>
  );
};

export default OwnLog;
