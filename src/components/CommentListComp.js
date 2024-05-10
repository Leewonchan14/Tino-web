import {InputComp} from "./InputComp";
import React, {memo, useState} from "react";
import BlueButton from "./BlueButton";
import TinoIcon from "../assets/tino_icon.png";
import {G_MARKET_FONT} from "../constant/FontFamily";

const CommentInputComp = () => {
    return (
        <div className={"flex h-20 mb-4"}>
            <InputComp placeholder={"댓글을 입력하세요"} className={"!h-full !m-0"}/>
            <BlueButton className={"h-full w-32 text-xl font-bold !m-0 !ml-4"}>입력</BlueButton>
        </div>
    )
}

const timeConverter = (dateTime) => {
    let date = new Date(dateTime);
    let hours = date.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    return date.getFullYear() + "년 " + (date.getMonth() + 1) + "월" + date.getDate() + "일 " + hours + "시" + date.getMinutes() + "분";
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


const OwnComment = () => {
    return (
        <div className={"border-2 w-full rounded-3xl mb-4 p-8"}>
            <span style={{fontFamily: G_MARKET_FONT}} className={"text-2xl text-blue-500"}>내 댓글</span>
            <div className={""}>{timeConverter("2024-01-14T17:48:05.414")}</div>
            <div className={"flex items-center my-4"}>
                <div className={"rounded-full bg-gray-400 mr-4"}>
                    <img className={"h-14"} src={TinoIcon} alt=""/>
                </div>
                <div className={"flex-col"}>
                    <div style={{fontFamily: G_MARKET_FONT}} className={"text-xl"}>내 이름</div>
                    <RatingComp score={1.5}/>
                    <HelpfulHeartButton isHelpful={false} score={3}/>
                </div>
            </div>
            <div>이 게임이 똥망이 이유...</div>
        </div>
    )
}


const Comment = ({comment}) => {
    return (
        <div className={"border-2 w-full rounded-3xl mb-4 p-8"}>
            <div className={""}>{timeConverter("2024-01-14T17:48:05.414")}</div>
            <div className={"flex items-center my-4"}>
                <div className={"rounded-full bg-gray-400 mr-4"}>
                    <img className={"h-14"} src={TinoIcon} alt=""/>
                </div>
                <div className={"flex-col"}>
                    <div style={{fontFamily: G_MARKET_FONT}} className={"text-xl"}>{comment.user.nickname}</div>
                    <RatingComp score={comment.star}/>
                    <HelpfulHeartButton isHelpful={false} score={comment.helpful}/>
                </div>
            </div>
            <div>{comment.reviewContent}</div>
        </div>
    );
}

const CommentList = ({commentState = []}) => {
    return (
        commentState.map((comment, index) => {
            console.log(comment)
            return (
                <Comment key={index} comment={comment}/>
            )
        })
    )
}


const CommentListComp = ({...rest}) => {
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
            <div className={"mt-10 text-3xl mb-4"}>댓글</div>
            <div className={"w-full h-96 rounded-3xl mb-12"}>
                <OwnComment/>
                <CommentInputComp/>
                <CommentList commentState={commentState}/>
            </div>
        </>
    )
}

let MemoCommentListComp = React.memo(CommentListComp);
export {MemoCommentListComp as CommentListComp};