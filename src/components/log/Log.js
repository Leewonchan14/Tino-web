import React from "react";

function Log({log, index, className}) {
    return (
        <>
            <div className={"mx-1 py-2 flex justify-center items-center w-[90%]"}>
                <div className={"text-3xl w-20 text-center"}>{index + 1}등</div>
                <div className={"rounded-full border-2 mx-3"}>
                    <img className={"h-16"}
                         src={"https://tinos-images-storage.s3.ap-northeast-2.amazonaws.com/default_user_image.png"}
                        // src={TinoIcon}
                         alt=""/>
                </div>
                <div className={"text-2xl font-bold"}>{log.userId}</div>
                <div>{log.user.nickname}</div>
                <div className={"text-2xl flex-1 text-center"}>{log.gameScore}점</div>
            </div>
            <div className={"border-2"}></div>
        </>
    );
}

export default Log;