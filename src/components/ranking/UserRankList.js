import React from "react";
import RankCard from "./RankCard";
import RankHeader from "./RankHeader";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import useGetUserRankInfiniteQuery from "../../hooks/queries/rank/useGetUserRankInfiniteQuery";
import default_image from "../../assets/default_image.jpg";

const UserRankList = () => {

    let {
        userState, isFetching, fetchNextPage, isSuccess
    } = useGetUserRankInfiniteQuery()

    let {loadingComp} = useReactQueryInfiniteScroll({
        fetchData: fetchNextPage, isFetching
    })

    return (
        <section className={"w-full"}>
            <RankHeader score={"점수"} item={"유저"}/>
            {isSuccess && userState.pages.map((page, _) => (
                page.map((userRank, _) =>
                    <RankCard
                        key={userRank.rankId} rank={userRank.totalRank}
                        score={userRank.rankWeight} text={userRank.user.nickname}
                        picture={default_image} />
                        // picture={userRank.user.profileImageURL}/>
                )
            ))}

            <LoadingSpinner loadingComp={loadingComp} isFetching={isFetching}/>
        </section>
    )
}

export default UserRankList;