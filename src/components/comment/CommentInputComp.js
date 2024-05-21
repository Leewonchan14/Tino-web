import InputComp from "../recycle/input/InputComp";
import BlueButton from "../recycle/button/BlueButton";
import React from "react";

const CommentInputComp = () => {
    return (
        <div className={"flex h-20 mb-4"}>
            <InputComp placeholder={"댓글을 입력하세요"} className={"!h-full !m-0 !p-6 !whitespace-normal"}/>
            <BlueButton className={"h-full w-32 text-xl font-bold !m-0 !ml-4"}>입력</BlueButton>
        </div>
    )
}

export default CommentInputComp;