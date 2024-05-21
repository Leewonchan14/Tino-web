import React from "react";

const CommentRatingStar = ({score}) => {
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

export default CommentRatingStar;