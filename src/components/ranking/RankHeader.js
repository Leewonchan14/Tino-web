import React from "react";

function RankHeader({item, score}) {
    return (
        <section className={"w-full py-2 flex flex-row items-center border-b border-gray-200"}>
            <span className={"font-bold text-center text-gray-500 w-[15%]"}>순위</span>
            <span className={"pl-5 font-bold text-gray-500 w-[35%]"}>{item}</span>
            <span className={"font-bold text-center text-gray-500 w-[50%]"}>{score}</span>
        </section>
    )
}

export default RankHeader;