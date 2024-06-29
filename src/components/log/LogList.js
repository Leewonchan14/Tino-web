import React from "react";
import { useGetLogsByGameId } from "../../hooks/log/useGetLogsByGameId";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import Log, { LogSkeleton, LogTable } from "./Log";

function LogList({ gameId }) {
  const pageSize = 10;

  let { isSuccess, isFetching, logState, fetchNextPage } = useGetLogsByGameId({
    gameId,
    pageSize,
  });

  let { loadingComp } = useReactQueryInfiniteScroll({
    fetchData: fetchNextPage,
    isFetching,
  });

  return (
    <div
      className={
        "flex-col h-full flex-1 justify-center overflow-y-scroll mobile:h-64"
      }
    >
      <LogTable isSuccess={isSuccess} logState={logState} pageSize={pageSize} />

      <LoadingSpinner loadingComp={loadingComp} isFetching={isFetching} />
    </div>
  );
}

export default LogList;
