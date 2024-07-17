import GameController from "../../../apis/game.controller";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SECOND } from "../../../utils/timeConverter";
import { GAME_CARD_FETCH_SIZE } from "../../../pages/HomePage";
import { delayFetch } from "../../../utils/delay";
import useReactQueryInfiniteScroll from "../../recycle/useReactQueryInfiniteScroll";

export const useGetGamesInfiniteQuery = ({
  selectedGameSortMenu,
  pageSize,
}) => {
  const findAllGame = async ({ page, size, sort }) => {
    const response = await delayFetch({
      fetcherPromise: GameController.findAll({
        page,
        size,
        sort,
      }),
      milliseconds: 200,
    });
    return response.data;
  };

  let {
    data: gameState,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ["games", { sort: selectedGameSortMenu }],
    queryFn: async (args) => {
      return await findAllGame({
        page: args.pageParam,
        size: pageSize,
        sort: selectedGameSortMenu.value,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length < GAME_CARD_FETCH_SIZE) return undefined;

      return lastPageParam + 1;
    },
    staleTime: 30 * SECOND,
    gcTime: 30 * SECOND,
  });

  let { loadingComp } = useReactQueryInfiniteScroll({
    fetchData: fetchNextPage,
    isFetching,
    hasNextPage,
  });

  return { isSuccess, isFetching, gameState, loadingComp };
};

export default useGetGamesInfiniteQuery;
