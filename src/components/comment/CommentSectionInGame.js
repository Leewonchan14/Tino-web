import React from "react";
import OwnComment from "./OwnComment";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import usePostComment from "../../hooks/comment/usePostComment";
import useIsOpen from "../../hooks/recycle/useIsOpen";

const CommentSectionInGame = ({ gameId, ...rest }) => {
  const { mutate, isPending } = usePostComment({
    gameId,
  });

  let { isOpen, toggleIsOpen } = useIsOpen();

  return (
    <>
      <h2 className={"mt-10 text-3xl mb-4"}>댓글</h2>
      <section className={"w-full rounded-3xl"}>
        {/*자신의 댓글 컴포넌트*/}
        <OwnComment
          isPending={isPending}
          gameId={gameId}
          isOpen={isOpen}
          toggleIsOpen={toggleIsOpen}
        />

        {/*댓글 입력 컴포넌트*/}
        <CommentInput
          gameId={gameId}
          isOpen={isOpen}
          toggleIsOpen={toggleIsOpen}
          mutate={mutate}
        />

        {/*게임의 달린 댓글 목록*/}
        <CommentList gameId={gameId} />
      </section>
    </>
  );
};

export default CommentSectionInGame;
