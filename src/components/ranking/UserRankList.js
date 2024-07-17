import React from "react";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import useGetUserRankInfiniteQuery from "../../hooks/queries/rank/useGetUserRankInfiniteQuery";
import default_image from "../../assets/default_image.jpg";
import { RankCardTable } from "./RankCardTable";

const UserRankList = () => {
  let { userState, isFetching, fetchNextPage, isSuccess } =
    useGetUserRankInfiniteQuery();

  let { loadingComp } = useReactQueryInfiniteScroll({
    fetchData: fetchNextPage,
    isFetching,
  });

  return (
    <>
      <RankCardTable
        {...{ isSuccess, isFetching }}
        item={"유저"}
        scoreName={"점수"}
        states={userState}
        getText={(state) => state.user.nickname}
        getPicture={(state) => default_image}
        getScore={(state) => state.rankWeight}
        getKey={(state) => state.rankId}
      />
      <LoadingSpinner
        loadingComp={loadingComp}
        isFetching={isFetching}
      />
    </>
  );
};

export default UserRankList;
