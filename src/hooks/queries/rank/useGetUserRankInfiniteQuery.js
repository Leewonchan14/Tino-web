import RankController from "../../../apis/rank.controller";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MINUTE } from "../../../utils/timeConverter";
import { delayFetch } from "../../../utils/delay";

const PAGE_SIZE = 12;

const useGetUserRankInfiniteQuery = () => {
  const fetchUserRank = async ({ page }) => {
    let response = await delayFetch({
      fetcherPromise: RankController.findUserRank({
        page,
        size: PAGE_SIZE,
      }),
      milliseconds: 200,
    });
    return response.data.rankList;
  };
  let {
    data: userState,
    isFetching,
    fetchNextPage,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ["rank", "user"],
    queryFn: async (args) => {
      return await fetchUserRank({ page: args.pageParam });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length < PAGE_SIZE) return undefined;
      return lastPageParam + 1;
    },
    staleTime: MINUTE,
    gcTime: 5 * MINUTE,
  });

  return { userState, isFetching, fetchNextPage, isSuccess };
};

export default useGetUserRankInfiniteQuery;
