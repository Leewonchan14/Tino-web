import LogController from "../../apis/log.controller";
import {useInfiniteQuery} from "@tanstack/react-query";
import {SECOND} from "../../utils/timeConverter";

export const useGetLogsByGameId = ({gameId, pageSize}) => {
    const findLogsByGameId = async ({gameId, page, size}) => {
        const response = await LogController.findLogsByGameId({
            gameId, page, size
        });
        return response.data;
    }

    let {
        data: logState,
        isFetching,
        fetchNextPage,
        isSuccess,
    }
        = useInfiniteQuery({
        queryKey: ["logs", {gameId}],
        queryFn: async (args) => (
            await findLogsByGameId({gameId, page: args.pageParam, size: pageSize})
        ),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.length === 0) return undefined;
            return lastPageParam + 1;
        },
        staleTime: 30 * SECOND,
        gcTime: 30 * SECOND
    });


    return {isSuccess, isFetching, logState, fetchNextPage};
}