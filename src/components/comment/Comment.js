import TinoIcon from "../../assets/tino_icon.png";
import React from "react";
import CommentUserProfile from "./atoms/CommentUserProfile";

const Comment = ({comment, index, containerStyle, nicknameStyle}) => {
    return (
        <article key={index} className={"block border-2 w-full rounded-3xl mb-4 p-8 " + containerStyle}>
            <section className={"flex items-center w-full"}>
                <picture className={"block rounded-full bg-gray-400 mr-4"}>
                    <img className={"h-14"} src={TinoIcon} alt=""/>
                </picture>
                <CommentUserProfile comment={comment} nicknameStyle={nicknameStyle}/>
            </section>
            <span className={"block mt-2"}>{comment.reviewContent}</span>
        </article>
    );
}

export default Comment;