import React from "react";
import Comment, { CommentSkeleton } from "./Comment";
import useGetCommentInfiniteQuery from "../../hooks/queries/comment/useGetCommentInfiniteQuery";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import { range } from "../../utils/range";
import LoadingSpinner from "../common/spinner/LoadingSpinner";

const CommentList = ({ gameId }) => {
  const { comments, isFetching, fetchNextPage, isSuccess } =
    useGetCommentInfiniteQuery({ gameId });

  const { loadingComp } = useReactQueryInfiniteScroll({
    fetchData: fetchNextPage,
    isFetching,
  });

  return (
    <>
      {isSuccess &&
        comments.pages.map((page, index) =>
          page.map((comment) => (
            <Comment key={comment.reviewId} comment={comment} index={index} />
          ))
        )}
      <LoadingSpinner loadingComp={loadingComp} isFetching={isFetching} />
      {isFetching && range(1, 3).map((num) => <CommentSkeleton key={num} />)}
    </>
  );
};

export default CommentList;
