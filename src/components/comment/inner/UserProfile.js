import {G_MARKET_FONT} from "../../../constant/FontFamily";
import timeConverter from "../../../util/timeConverter";
import RatingComp from "./RatingComp";
import HelpfulHeartButton from "./HelpfulHeartButton";
import React from "react";

function UserProfile({user}) {
    return (
        <div className={"flex items-center flex-1"}>
            <section className={"flex-col w-full"}>
                <div className={"flex relative"}>
                        <span style={{fontFamily: G_MARKET_FONT}}
                              className={"text-xl " + nicknameStyle}>
                            {user.nickname}
                        </span>
                    <time
                        className={"absolute text-gray-400 ml-auto right-0"}>{timeConverter("2024-01-14T17:48:05.414")}</time>
                </div>
                <RatingComp score={comment.star}/>
                <HelpfulHeartButton isHelpful={false} score={comment.helpful}/>
            </section>
        </div>
    )
}

export default UserProfile;