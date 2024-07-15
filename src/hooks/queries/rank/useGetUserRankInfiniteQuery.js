import RankController from "../../../apis/rank.controller";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MINUTE } from "../../../utils/timeConverter";
import { delayFetch } from "../../../utils/delay";

const useGetUserRankInfiniteQuery = () => {
  const fetchUserRank = async ({ page, size }) => {
    let response = await delayFetch({
      fetcherPromise: RankController.findUserRank({ page, size }),
      milliseconds: 500,
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
      return await fetchUserRank({ page: args.pageParam, size: 10 });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) return undefined;
      return lastPageParam + 1;
    },
    staleTime: MINUTE,
    gcTime: 5 * MINUTE,
  });

  return { userState, isFetching, fetchNextPage, isSuccess };
};

export default useGetUserRankInfiniteQuery;
