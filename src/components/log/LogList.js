import React from "react";
import { useGetLogsByGameId } from "../../hooks/log/useGetLogsByGameId";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import { LogTable } from "./Log";

function LogList({ gameId }) {
  const pageSize = 10;

  let { isSuccess, isFetching, logState, loadingComp } =
    useGetLogsByGameId({
      gameId,
      pageSize,
    });

  return (
    <div
      className={
        "flex-col h-full flex-1 justify-center overflow-y-scroll mobile:h-64"
      }
    >
      <LogTable {...{ isSuccess, isFetching, logState }} />
      <LoadingSpinner {...{ loadingComp }} />
    </div>
  );
}

export default LogList;
