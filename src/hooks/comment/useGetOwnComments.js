import { userStore } from "../../stores/userStore";
import { useQuery } from "@tanstack/react-query";
import { CommentController } from "../../apis/comment.controller";
import { MINUTE } from "../../utils/timeConverter";
import { AxiosError } from "axios";
import { delayFetch } from "../../utils/delay";

export const useGetOwnComments = ({ gameId }) => {
  const { userId, isLogin } = userStore((state) => state);

  const fetchFn = async () => {
    if (!isLogin) {
      throw new AxiosError("로그인이 필요합니다.", "");
    }

    const response = await delayFetch({
      fetcherPromise: CommentController.findCommentByUserId({
        gameId,
        userId,
      }),
      milliseconds: 1000,
    });
    return response.data;
  };

  const {
    data: comment,
    isFetching,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ["comment", gameId, userId],
    queryFn: fetchFn,
    staleTime: 60 * MINUTE,
    gcTime: MINUTE,
    retry: () => false,
  });

  return { isFetching, isSuccess, comment, error };
};
