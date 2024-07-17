import RankController from "../../../apis/rank.controller";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MINUTE } from "../../../utils/timeConverter";
import { delayFetch } from "../../../utils/delay";

const PAGE_SIZE = 10;

const useGetGameRankInfiniteQuery = ({ sortMenu }) => {
  const fetchGameRank = async ({ page, sort }) => {
    let response = await delayFetch({
      fetcherPromise: RankController.findGameRank({
        page,
        size: PAGE_SIZE,
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
    queryKey: ["rank", "game", sortMenu],
    queryFn: async (args) => {
      return await fetchGameRank({
        page: args.pageParam,
        sort: sortMenu.value,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length < PAGE_SIZE) return undefined;
      return lastPageParam + 1;
    },
    staleTime: MINUTE,
    gcTime: 5 * MINUTE,
  });

  return {
    gameState,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isSuccess,
  };
};

export default useGetGameRankInfiniteQuery;
