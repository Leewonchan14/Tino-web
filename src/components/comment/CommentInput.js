import BlueButton from "../common/button/BlueButton";
import React, {useState} from "react";
import AutoResizeTextInputComp from "../common/input/AutoResizeTextInputComp";
import StarInputRadioButton from "./StarInputRadioButton";

const CommentInput = () => {
    const [value, setValue] = useState("")
    const [star, setStar] = useState(5)

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className={"h-auto mb-4"}>
            {/*별점 입력 컴포넌트*/}
            <AutoResizeTextInputComp value={value} onChange={onChange} placeholder={"댓글을 입력하세요"}/>
            <section className={"flex h-10 items-center"}>
                <StarInputRadioButton setStar={setStar} star={star}/>
                <BlueButton className={"h-full w-32 text-xl font-bold !m-0 !ml-auto"}>입력</BlueButton>
            </section>
        </div>
    )
}

export default CommentInput;