import React from "react";
import { CommentSkeleton, CommentUserProfile } from "./Comment";
import { userStore } from "../../stores/userStore";

const OwnComment = ({
  isFetching,
  error,
  comment,
  isInputOpen,
  toggleInputOpen,
}) => {
  const { isLogin } = userStore((state) => state);

  if (!isLogin) {
    return <NotLoginOwnComment />;
  }

  if (isFetching) {
    return <CommentSkeleton />;
  }

  if (error) {
    console.error(error);
    return <NotExistOwnComment />;
  }

  return (
    <ExistOwnComment
      comment={comment}
      isInputOpen={isInputOpen}
      toggleInputOpen={toggleInputOpen}
    />
  );
};

export const NotLoginOwnComment = () => {
  return (
    <div className={"mb-4 font-G_MARKET"}>
      로그인을 하고 댓글을 남겨 보세요!
    </div>
  );
};

const NotExistOwnComment = () => {
  return (
    <div className={"mb-4 font-G_MARKET"}>
      본인의 댓글이 존재하지 않습니다.
    </div>
  );
};

const ExistOwnComment = ({
  comment,
  isInputOpen,
  toggleInputOpen,
}) => {
  return (
    <article
      className={
        "relative block border-2 w-full rounded-3xl mb-4 p-8 bg-primary-100"
      }
    >
      <section className={"flex items-center w-full"}>
        <picture
          className={
            "w-12 h-12 block rounded-full overflow-clip bg-gray-100 mr-4"
          }
        >
          <img
            className={"object-cover w-full h-full"}
            src={comment.user.profileImageURL}
            alt=""
          />
        </picture>
        <CommentUserProfile
          comment={comment}
          nicknameStyle={"text-indigo-600"}
        />
      </section>
      {/*<CommentHelpfulButton isHelpful={false} score={comment.helpful} />*/}
      <span className={"block mt-2"}>{comment.reviewContent}</span>
      <span
        className={
          "absolute bottom-6 right-8 underline cursor-pointer"
        }
        onClick={() => toggleInputOpen()}
      >
        {isInputOpen ? "닫기" : "수정"}
      </span>
    </article>
  );
};

export default OwnComment;
