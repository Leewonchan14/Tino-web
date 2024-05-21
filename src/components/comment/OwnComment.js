import React from "react";
import Comment from "./Comment";

const OwnComment = () => {
    return (
        <Comment comment={{
            "reviewId": 224,
            "reviewContent": "이 게임이 똥망이 이유...",
            "star": 0,
            "helpful": 0,
            "dateTime": "2024-01-14T17:48:05.414",
            "user": {
                "userId": "1",
                "nickname": "내 이름",
                "email": "",
            }
        }}
                 containerStyle={"bg-indigo-100"}
                 nicknameStyle={"text-indigo-600"}
        />
    )
}

export default OwnComment;