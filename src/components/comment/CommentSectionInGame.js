import React, {useState} from "react";
import OwnComment from "./OwnComment";
import StarInputRadioButton from "./StarInputRadioButton";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

const CommentSectionInGame = ({gameId, ...rest}) => {

    return (
        <>
            <h2 className={"mt-10 text-3xl mb-4"}>댓글</h2>
            <section className={"w-full rounded-3xl"}>

                {/*자신의 댓글 컴포넌트*/}
                <OwnComment/>

                {/*댓글 입력 컴포넌트*/}
                <CommentInput/>

                {/*게임의 달린 댓글 목록*/}
                <CommentList/>
            </section>
        </>
    )
}

export default CommentSectionInGame;