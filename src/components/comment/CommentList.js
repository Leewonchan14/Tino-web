import React, {useState} from "react";
import OwnComment from "./OwnComment";
import StarInputRadioButton from "./StarInputRadioButton";
import CommentInput from "./CommentInput";
import Comment from "./Comment";

const CommentList = ({...rest}) => {

    const [star, setStar] = useState(5)
    const [commentState, setCommentState] = useState([{
        "reviewId": 224,
        "reviewContent": "테스트",
        "star": 0,
        "helpful": 0,
        "dateTime": "2024-01-14T17:48:05.414",
        "user": {
            "userId": "1",
            "nickname": "nick 1",
            "email": "test1@test.com",
            "profileImageURL": "https://tinos-images-storage.s3.ap-northeast-2.amazonaws.com/default_user_image.png",
            "parentMajor": "컴퓨터공학부",
            "major": "컴퓨터공학과",
            "role": "USER"
        },
        "gameId": 51
    }])
    return (
        <>
            <h2 className={"mt-10 text-3xl mb-4"}>댓글</h2>
            <section className={"w-full rounded-3xl"}>

                {/*자신의 댓글 컴포넌트*/}
                <OwnComment/>

                {/*별점 입력 컴포넌트*/}
                <StarInputRadioButton setStar={setStar} star={star}/>

                {/*댓글 입력 컴포넌트*/}
                <CommentInput/>

                {/*게임의 달린 댓글 목록*/}
                {commentState.map((comment, index) => {
                    return (
                        <Comment key={index} comment={comment} index={index}/>
                    )
                })}
            </section>
        </>
    )
}

export default CommentList;