import React from "react";
import Skeleton from "react-loading-skeleton";

export const LogTable = ({ isSuccess, logState, pageSize }) => {
  return (
    <>
      <table className={"relative w-full"}>
        <LogCardHeader />
        <tbody>
          {isSuccess &&
            logState.pages.map((page, pageIndex) =>
              page.map((log, logIndex) => (
                <Log
                  log={log}
                  key={log.logId}
                  index={pageIndex * pageSize + logIndex}
                />
              ))
            )}
          {!isSuccess &&
            Array.from({ length: 10 }).map((_, index) => {
              return <LogSkeleton key={index} />;
            })}
        </tbody>
      </table>
    </>
  );
};

const LogCardHeader = () => {
  return (
    <thead className={"sticky bg-primary-600 text-white top-0 h-12"}>
      <tr>
        <th className={"w-20"}>순위</th>
        <th className={"text-start pl-3"}>사용자</th>
        <th className={""}>점수</th>
      </tr>
    </thead>
  );
};

function Log({ log, index, className }) {
  return (
    <tr className={"border-b-2"}>
      <td className={"text-center"}>{index + 1}등</td>
      <td className={"flex items-center text-nowrap"}>
        <div className={"flex justify-center items-center"}>
          <picture className={"h-16 w-16 rounded-full border-2 overflow-clip"}>
            <img
              className={"h-16 object-cover"}
              // src={"https://tinos-images-storage.s3.ap-northeast-2.amazonaws.com/default_user_image.png"}
              src={log.user.profileImageURL}
            />
          </picture>
          {log.user.nickname}
        </div>
      </td>
      <td className={"text-center"}>{log.gameScore}</td>
    </tr>
  );
}

export const LogSkeleton = () => {
  return (
    <tr className={"border-b-2"}>
      <td className={"text-center"}>
        <Skeleton width={40} />
      </td>
      <td className={"flex items-center text-nowrap"}>
        <div className={"flex justify-center items-center"}>
          <picture className={"h-16 w-16 rounded-full border-2 overflow-clip"}>
            <Skeleton containerClassName={"flex h-full"} />
          </picture>
          <Skeleton width={100} />
        </div>
      </td>
      <td className={"text-center"}>
        <Skeleton width={40} />
      </td>
    </tr>
  );
};

export default Log;
