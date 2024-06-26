import GameController from "../../../apis/game.controller";
import {useInfiniteQuery} from "@tanstack/react-query";
import {SECOND} from "../../../utils/timeConverter";

export const useGetGamesInfiniteQuery = ({selectedGameSortMenu, pageSize}) => {
    const findAllGame = async ({page, size, sort}) => {
        const response = await GameController.findAll({
            page, size, sort
        });
        return response.data;
    }

    let {
        data: gameState,
        isFetching,
        fetchNextPage,
        isSuccess
    } = useInfiniteQuery(
        {
            queryKey: ['games', {sort: selectedGameSortMenu}],
            queryFn: async (args) => {
                return await findAllGame({page: args.pageParam, size: pageSize, sort: selectedGameSortMenu.value})
            },
            initialPageParam: 0,
            getNextPageParam: (lastPage, allPages, lastPageParam) => {
                if (lastPage.length === 0) return undefined;

                return lastPageParam + 1;
            },
            staleTime: 30 * SECOND,
            gcTime: 30 * SECOND
        }
    )


    return {isSuccess, isFetching, gameState, fetchNextPage};
}

export default useGetGamesInfiniteQuery;