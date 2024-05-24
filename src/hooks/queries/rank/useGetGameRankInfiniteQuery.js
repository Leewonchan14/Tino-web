import RankController from "../../../apis/rank.controller";
import {useInfiniteQuery} from "@tanstack/react-query";
import {MINUTE} from "../../../utils/timeConverter";

const useGetGameRankInfiniteQuery = ({sortMenu}) => {
    const fetchGameRank = async ({page, size, sort}) => {
        let response = await RankController.findGameRank({page, size, sort})
        return response.data;
    }
    let {
        data: gameState,
        isFetching,
        fetchNextPage,
        isSuccess
    } = useInfiniteQuery({
        queryKey: ["rank", "game", sortMenu],
        queryFn: async (args) => {
            return await fetchGameRank({page: args.pageParam, size: 10, sort: sortMenu.value})
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.length === 0) return undefined;
            return lastPageParam + 1;
        },
        staleTime: MINUTE,
        gcTime: 5 * MINUTE
    })

    return {gameState, isFetching, fetchNextPage, isSuccess}
}

export default useGetGameRankInfiniteQuery;