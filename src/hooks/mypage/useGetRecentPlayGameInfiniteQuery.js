import { useInfiniteQuery } from "@tanstack/react-query";
import { delayFetch } from "../../utils/delay";
import GameController from "../../apis/game.controller";
import { userStore } from "../../stores/userStore";
import { GAME_CARD_FETCH_SIZE } from "../../pages/MyPage";
import { SECOND } from "../../utils/timeConverter";
import useReactQueryInfiniteScroll from "../recycle/useReactQueryInfiniteScroll";

const useGetRecentPlayGameInfiniteQuery = () => {
  let { userId } = userStore((state) => state);

  const fetchGames = async ({ page }) => {
    const response = await delayFetch({
      fetcherPromise: GameController.findRecentUserGame({
        userId,
        page,
        size: GAME_CARD_FETCH_SIZE,
      }),
      milliseconds: 300,
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
    queryKey: ["games", "recent", userId],
    queryFn: async (args) => {
      return await fetchGames({
        page: args.pageParam,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) return undefined;

      return lastPageParam + 1;
    },
    staleTime: 10 * SECOND,
    gcTime: 0,
  });

  let { loadingComp } = useReactQueryInfiniteScroll({
    fetchData: fetchNextPage,
    isFetching,
    hasNextPage,
  });

  return { isSuccess, isFetching, gameState, loadingComp };
};

export default useGetRecentPlayGameInfiniteQuery;
