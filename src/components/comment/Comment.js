import React from "react";
import { G_MARKET_FONT } from "../../constants/FontFamily";
import timeConverter from "../../utils/timeConverter";
import Skeleton from "react-loading-skeleton";
import { ReactComponent as Star } from "../../assets/star.svg";
import { range } from "../../utils/range";
import { v4 } from "uuid";

const Comment = ({ comment, containerStyle, nicknameStyle }) => {
  return (
    <article
      className={"block border-2 w-full rounded-3xl mb-4 p-8 " + containerStyle}
    >
      <section className={"flex items-center w-full"}>
        <picture className={"block rounded-full bg-gray-400 mr-4"}>
          <img className={"h-14"} src={comment.user.profileImageURL} alt="" />
        </picture>
        <CommentUserProfile comment={comment} nicknameStyle={nicknameStyle} />
      </section>
      <span className={"block mt-2"}>{comment.reviewContent}</span>
    </article>
  );
};

export function CommentUserProfile({ comment, nicknameStyle }) {
  return (
    <div className={"flex items-center flex-1"}>
      <section className={"flex-col w-full"}>
        <div className={"flex relative"}>
          <span
            style={{ fontFamily: G_MARKET_FONT }}
            className={"text-xl " + nicknameStyle}
          >
            {comment.user.nickname}
          </span>
          <time className={"absolute text-gray-400 ml-auto right-0"}>
            {timeConverter(comment.dateTime)}
          </time>
        </div>
        <CommentRatingStar score={comment.star} />
      </section>
    </div>
  );
}

const CommentRatingStar = ({ score }) => {
  const range1_5 = Array.from({ length: 5 }).map((_, i) => i + 1);
  return (
    <div className={"flex gap-2 mobile:gap-1"}>
      {range1_5.map((star, index) => {
        return (
          <Star
            key={index}
            width={20}
            height={20}
            fill={star <= score ? "orange" : "gray"}
          />
        );
      })}
    </div>
  );
};

export const CommentSkeleton = ({ length }) => {
  return range(length).map(() => (
    <div key={v4()} className={"w-full h-40 rounded-2xl overflow-clip mb-4"}>
      <Skeleton containerClassName={"flex h-full"} />
    </div>
  ));
};

export default Comment;
