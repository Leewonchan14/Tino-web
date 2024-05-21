import {G_MARKET_FONT} from "../../constant/FontFamily";
import TinoIcon from "../../assets/tino_icon.png";
import React from "react";
import timeConverter from "../../util/timeConverter";

const HelpfulHeartButton = ({isHelpful, onClick, score}) => {
    return (
        <div onClick={onClick} className={"flex items-center cursor-pointer"}>
            <svg className={"h-6 w-6 fill-current text-red-500"} xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24">
                <path
                    className={isHelpful ? "text-red-500" : "text-gray-300"}
                    d="M12 21.35l-1.45-1.32C5.4 16.18 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 7.68-8.55 11.54L12 21.35z"/>
            </svg>
            <div>{score}</div>
        </div>
    )
}

const RatingComp = ({score}) => {
    return (
        <div className={"flex items-center"}>
            <div className={"flex"}>
                {[1, 2, 3, 4, 5].map((star, index) => {
                    return (
                        <svg key={index} className={"h-6 w-6 fill-current text-yellow-500"}
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path
                                className={star <= score ? "text-yellow-500" : "text-gray-300"}
                                d="M12 2l2.5 6.5h6L15.5 12l1 6-5-2-5 2 1-6-4-3.5h6L12 2z"/>
                        </svg>
                    )
                })}
            </div>
        </div>
    )
}

const Comment = ({comment, index, containerStyle, nicknameStyle}) => {
    function IconImage({src}) {
        return (
            <section className={"block rounded-full bg-gray-400 mr-4"}>
                <img className={"h-14"} src={src} alt=""/>
            </section>
        )
    }

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