import { CommentController } from "../../apis/comment.controller";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userStore } from "../../stores/userStore";
import { useGetOwnComments } from "./useGetOwnComments";
import { delayFetch } from "../../utils/delay";

const usePostComment = ({ gameId }) => {
  const { comment } = useGetOwnComments({ gameId });
  const { userId } = userStore((state) => state);
  const queryClient = useQueryClient();

  const mutationFn = ({ reviewContent, star }) => {
    let body = {
      userId,
      gameId,
      reviewId: comment?.reviewId,
      reviewContent,
      star,
    };
    let method = comment ? "updateComment" : "createComment";
    return delayFetch({
      fetcherPromise: CommentController[method](body),
      milliseconds: 500,
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn,
    onSuccess: (data, variables, context) => {
      if (comment) return;
      // 이전 댓글이 없을 때만 invalidate
      queryClient.invalidateQueries({
        queryKey: ["comment", gameId, userId],
      });
    },
    onMutate: async ({ reviewContent, star }) => {
      // 이전 댓글이 있었을때
      if (!comment) return;

      await queryClient.cancelQueries(["comment", gameId]);

      queryClient.setQueryData(
        ["comment", gameId, userId],
        (oldData) => ({
          ...oldData,
          reviewContent,
          star,
        })
      );
    },
    onError: (error, variables, context) => {
      console.error(error);

      // 이전 댓글이 있었을때
      if (comment) {
        queryClient.setQueryData(
          ["comment", gameId, userId],
          comment
        );
      }
    },
    onSettled: (data, error, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["comments", gameId],
      });
    },
  });
  return { mutate, isPending };
};

export default usePostComment;
