import {G_MARKET_FONT} from "../../../constant/FontFamily";
import timeConverter from "../../../utils/timeConverter";
import CommentRatingStar from "./CommentRatingStar";
import CommentHelpfulButton from "./CommentHelpfulButton";
import React from "react";

function CommentUserProfile({comment, nicknameStyle}) {
    return (
        <div className={"flex items-center flex-1"}>
            <section className={"flex-col w-full"}>
                <div className={"flex relative"}>
                        <span style={{fontFamily: G_MARKET_FONT}}
                              className={"text-xl " + nicknameStyle}>
                            {comment.user.nickname}
                        </span>
                    <time
                        className={"absolute text-gray-400 ml-auto right-0"}>{timeConverter("2024-01-14T17:48:05.414")}</time>
                </div>
                <CommentRatingStar score={comment.star}/>
                <CommentHelpfulButton isHelpful={false} score={comment.helpful}/>
            </section>
        </div>
    )
}

export default CommentUserProfile;