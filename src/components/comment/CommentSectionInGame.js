import React, { useState } from "react";
import OwnComment from "./OwnComment";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { useGetOwnComments } from "../../hooks/comment/useGetOwnComments";

const CommentSectionInGame = ({ gameId, ...rest }) => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const toggleInputOpen = () => {
    setIsInputOpen((pre) => !pre);
  };
  const {
    comment: ownComment,
    isFetching,
    error,
  } = useGetOwnComments({ gameId });

  return (
    <>
      <h2 className={"mt-10 text-3xl mb-4"}>댓글</h2>
      <section className={"w-full rounded-3xl"}>
        {/*자신의 댓글 컴포넌트*/}
        <OwnComment
          comment={ownComment}
          isFetching={isFetching}
          error={error}
          toggleInputOpen={toggleInputOpen}
          isInputOpen={isInputOpen}
        />

        {/*댓글 입력 컴포넌트*/}
        <CommentInput
          isFetching={isFetching}
          ownComment={ownComment}
          gameId={gameId}
          isInputOpen={isInputOpen}
          toggleInputOpen={toggleInputOpen}
        />

        {/*게임의 달린 댓글 목록*/}
        <CommentList gameId={gameId} />
      </section>
    </>
  );
};

export default CommentSectionInGame;
