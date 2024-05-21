import Comment from "./CommentComp";
import React from "react";

const CommentList = ({commentState}) => {
    return (
        commentState.map((comment, index) => {
            return (
                <Comment key={index} comment={comment} index={index}/>
            )
        })
    )
};

export default CommentList;
