import React from "react";
import TinoIcon from "../../assets/tino_icon.png";

function Log({log, index, className}) {
    return (
        <tr className={"border-b-2"}>
            <td className={"text-center"}>{index + 1}등</td>
            <td className={"flex items-center text-nowrap"} >
                <div className={"flex justify-center items-center"}>
                    <picture className={"h-16 w-16 rounded-full border-2 overflow-clip"}>
                        <img className={"h-16 object-cover"}
                             // src={"https://tinos-images-storage.s3.ap-northeast-2.amazonaws.com/default_user_image.png"}
                            src={TinoIcon}
                        />
                    </picture>
                    {log.user.nickname}
                </div>
            </td>
            <td className={"text-center"}>{log.gameScore}</td>
        </tr>
    );
}

export const LogSkeleton = () => {
    return (
        <div className={"mx-1 py-2 flex justify-center items-center w-[90%]"}>
            <div className={"text-3xl w-20 text-center"}><span className={"animate-pulse"}>1등</span></div>
            <div className={"rounded-full border-2 mx-3"}>
                <div className={"h-16 animate-pulse bg-gray-300"}></div>
            </div>
            <div className={"text-2xl font-bold animate-pulse"}><span className={"animate-pulse"}>Tino</span></div>
            <div><span className={"animate-pulse"}>Tino</span></div>
            <div className={"text-2xl flex-1 text-center animate-pulse"}><span className={"animate-pulse"}>100점</span>
            </div>
        </div>
    )
}

export default Log;