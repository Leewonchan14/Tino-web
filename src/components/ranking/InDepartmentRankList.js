import {useInfiniteQuery} from "@tanstack/react-query";
import {MINUTE} from "../../utils/timeConverter";
import RankHeader from "./RankHeader";
import RankCard from "./RankCard";
import React from "react";
import RankController from "../../apis/rank.controller.js";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import default_image from "../../assets/default_image.jpg";


const InDepartmentRankList = ({selectMajor}) => {

    const fetchInDepartmentRank = async ({page, size}) => {
        let response = await RankController.findInDepartmentRank({page, size, major: selectMajor.name})
        return response.data.rankList;
    }

    let {
        data: inDepartmentState,
        isFetching,
        fetchNextPage,
        isSuccess
    } = useInfiniteQuery({
        queryKey: ["rank", "department", selectMajor.name],
        queryFn: async (args) => {
            return await fetchInDepartmentRank({page: args.pageParam, size: 10});
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.length === 0) return undefined;
            return lastPageParam + 1;
        },
        staleTime: MINUTE,
        gcTime: 5 * MINUTE
    })

    let {loadingComp} = useReactQueryInfiniteScroll({
        fetchData: fetchNextPage,
        isFetching
    });

    return (
        <section className={"w-full"}>
            <RankHeader score={"점수"} item={"학과"}/>
            {isSuccess && inDepartmentState.pages.map((page, index) => (
                page.map((inDepartmentRank, subIndex) =>
                    <RankCard
                        key={inDepartmentRank.rankId} rank={inDepartmentRank.totalRank}
                        score={inDepartmentRank.rankWeight} text={inDepartmentRank.user.nickname}
                        picture={default_image}/>)
            ))}

            <LoadingSpinner loadingComp={loadingComp} isFetching={isFetching}/>
        </section>
    )
}

export default InDepartmentRankList;