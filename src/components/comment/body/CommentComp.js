import TinoIcon from "../../../assets/tino_icon.png";
import React from "react";
import IconImage from "../inner/IconImage";
import UserProfile from "../inner/UserProfile";

const Comment = ({comment, index, containerStyle, nicknameStyle}) => {
    return (
        <article key={index} className={"block border-2 w-full rounded-3xl mb-4 p-8 " + containerStyle}>
            <section className={"flex items-center w-full"}>
                <IconImage src={TinoIcon}/>
                <UserProfile user={comment.user}/>
            </section>
            <span className={"block mt-2"}>{comment.reviewContent}</span>
        </article>
    );
}

export default Comment;