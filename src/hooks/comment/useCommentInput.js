import { useEffect, useState } from "react";
import { useGetOwnComments } from "./useGetOwnComments";

const useCommentInput = ({ gameId }) => {
  const [inputComment, setInputComment] = useState({
    reviewContent: "",
    star: 5,
  });

  const { comment, isFetching } = useGetOwnComments({ gameId });

  useEffect(() => {
    if (comment) {
      let { reviewContent, star } = comment;
      setInputComment({
        reviewContent,
        star,
      });
    }
  }, [isFetching]);

  const changeInput = ({ name, value }) => {
    setInputComment((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  return { inputComment, changeInput };
};

export default useCommentInput;
