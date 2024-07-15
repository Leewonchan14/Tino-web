import BlueButton from "../common/button/BlueButton";
import React, { useEffect, useRef, useState } from "react";
import AutoResizeTextInputComp from "../common/input/AutoResizeTextInputComp";
import StarInputRadioButton from "./StarInputRadioButton";
import { CommentController } from "../../apis/comment.controller";
import { userStore } from "../../stores/userStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AcodianWrapper } from "../common/wrapper/AcodianWrapper";

const CommentInput = ({
  ownComment,
  gameId,
  isInputOpen,
  isFetching,
  toggleInputOpen,
}) => {
  const [value, setValue] = useState("");
  const [star, setStar] = useState(5);
  const { userId, isLogin } = userStore((state) => state);

  useEffect(() => {
    if (ownComment) {
      setValue(ownComment?.reviewContent);
      setStar(ownComment.star);
    }
  }, [isFetching]);

  const queryClient = useQueryClient();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const mutationFn = () => {
    if (!ownComment) {
      return CommentController.createComment({
        body: {
          userId,
          gameId,
          reviewContent: value,
          star,
        },
      });
    } else {
      return CommentController.updateComment({
        reviewId: ownComment?.reviewId,
        reviewContent: value,
      });
    }
  };

  const { mutate } = useMutation({
    mutationFn,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["comments", gameId],
      });
    },
    onMutate: async (e) => {
      await queryClient.cancelQueries(["comment", gameId]);
      const preComment = queryClient.getQueryData([
        "comment",
        gameId,
        userId,
      ]);
      await queryClient.cancelQueries([
        "comments",
        gameId,
        { sort: "RECENT" },
      ]);
      queryClient.setQueryData(
        ["comments", gameId, { sort: "RECENT" }],
        (old) => {
          return { ...old, pageParams: [0], pages: [[]] };
          // return old;
        }
      );
      queryClient.setQueryData(
        ["comment", gameId, userId],
        (oldData) => ({
          ...oldData,
          reviewContent: value,
          star,
        })
      );
      toggleInputOpen(false);

      return { preComment };
    },
    onError: (error, variables, context) => {
      console.error(error);
      queryClient.setQueryData(
        ["comment", gameId, userId],
        context.preComment
      );
      queryClient.invalidateQueries({
        queryKey: ["comments", gameId],
      });
    },
  });

  if (isFetching || !isLogin) {
    return;
  }

  return (
    <AcodianWrapper
      isOpen={isInputOpen || !ownComment}
      duration={250}
    >
      <AutoResizeTextInputComp
        value={value}
        onChange={onChange}
        placeholder={"댓글을 입력하세요"}
      />
      {/*별점 입력 컴포넌트*/}
      <section className={"flex mobile:flex-col"}>
        <StarInputRadioButton setStar={setStar} star={star} />
        <BlueButton
          className={
            "float-right h-12 w-32 text-xl font-bold cursor-pointer !m-0 !ml-auto mobile:w-full !mobile:mt-4"
          }
          onClick={mutate}
        >
          입력
        </BlueButton>
      </section>
    </AcodianWrapper>
  );
};

export default CommentInput;
