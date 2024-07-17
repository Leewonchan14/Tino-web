import BlueButton from "../common/button/BlueButton";
import React from "react";
import AutoResizeTextInputComp from "../common/input/AutoResizeTextInputComp";
import StarInputRadioButton from "./StarInputRadioButton";
import { AccordionWrapper } from "../common/wrapper/AccordionWrapper";
import useCommentInput from "../../hooks/comment/useCommentInput";
import { useGetOwnComments } from "../../hooks/comment/useGetOwnComments";
import { userStore } from "../../stores/userStore";

const CommentInput = ({ gameId, isOpen, toggleIsOpen, mutate }) => {
  const { isFetching } = useGetOwnComments({
    gameId,
  });

  let { isLogin } = userStore((state) => state);

  let { inputComment, changeInput } = useCommentInput({
    gameId,
    toggleIsOpen,
  });

  const onChange = (e) => {
    changeInput({
      name: "reviewContent",
      value: e.target.value,
    });
  };

  const onClick = () => {
    toggleIsOpen(false);
    mutate(inputComment);
  };

  if (isFetching || !isLogin) {
    return;
  }

  return (
    <AccordionWrapper isOpen={isOpen} duration={250}>
      <AutoResizeTextInputComp
        value={inputComment.reviewContent}
        onChange={onChange}
        placeholder={"댓글을 입력하세요"}
      />
      {/*별점 입력 컴포넌트*/}
      <section className={"flex mobile:flex-col"}>
        <StarInputRadioButton
          setStar={(star) =>
            changeInput({ name: "star", value: star })
          }
          star={inputComment.star}
        />
        <BlueButton
          className={
            "float-right h-12 w-32 text-xl font-bold cursor-pointer !m-0 !ml-auto mobile:w-full !mobile:mt-4"
          }
          onClick={onClick}
        >
          입력
        </BlueButton>
      </section>
    </AccordionWrapper>
  );
};

export default CommentInput;
