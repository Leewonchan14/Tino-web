import LogController from "../../apis/log.controller";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SECOND } from "../../utils/timeConverter";
import { delayFetch } from "../../utils/delay";
import useReactQueryInfiniteScroll from "../recycle/useReactQueryInfiniteScroll";

export const useGetLogsByGameId = ({ gameId, pageSize }) => {
  const findLogsByGameId = async ({ gameId, page, size }) => {
    const response = await delayFetch({
      fetcherPromise: LogController.findLogsByGameId({
        gameId,
        page,
        size,
      }),
      milliseconds: 200,
    });
    return response.data;
  };

  let {
    data: logState,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ["logs", { gameId }],
    queryFn: async (args) =>
      await findLogsByGameId({
        gameId,
        page: args.pageParam,
        size: pageSize,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length < pageSize) return undefined;
      return lastPageParam + 1;
    },
    staleTime: 30 * SECOND,
    gcTime: 30 * SECOND,
  });

  let { loadingComp } = useReactQueryInfiniteScroll({
    fetchData: fetchNextPage,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
  });

  return { isSuccess, isFetching, logState, loadingComp };
};
