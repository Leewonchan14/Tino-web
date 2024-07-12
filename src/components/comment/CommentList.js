import React from "react";
import Comment, { CommentSkeleton } from "./Comment";
import useGetCommentInfiniteQuery from "../../hooks/queries/comment/useGetCommentInfiniteQuery";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
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
      {isSuccess && renderComments(comments.pages.flat())}
      {isFetching && <CommentSkeleton length={4} />}
      <LoadingSpinner loadingComp={loadingComp} isFetching={isFetching} />
    </>
  );
};

const renderComments = (comments) => {
  return comments.map((comment) => (
    <Comment key={comment.reviewId} comment={comment} />
  ));
};

export default CommentList;
