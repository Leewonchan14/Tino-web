import { useInfiniteQuery } from "@tanstack/react-query";
import { SECOND } from "../../../utils/timeConverter";
import { CommentController } from "../../../apis/comment.controller";
import { delayFetch } from "../../../utils/delay";

export const useGetCommentInfiniteQuery = ({
  gameId,
  size = 3,
  sort = "RECENT",
}) => {
  const fetchComments = async ({ page, size, sort }) => {
    const response = await delayFetch({
      fetcherPromise: CommentController.findAll({
        gameId,
        sort,
        size,
        page,
      }),
      milliseconds: 200,
    });

    return response.data;
  };

  let {
    data: comments,
    isFetching,
    fetchNextPage,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ["comments", gameId, { sort }],
    queryFn: async (args) => {
      return await fetchComments({
        page: args.pageParam,
        size: size,
        sort: sort,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) return undefined;

      return lastPageParam + 1;
    },
    staleTime: 30 * SECOND,
    gcTime: 30 * SECOND,
  });

  return { isSuccess, isFetching, comments, fetchNextPage };
};

export default useGetCommentInfiniteQuery;
