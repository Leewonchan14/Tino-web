import {G_MARKET_FONT} from "../constant/FontFamily";
import React from "react";

const GameDescriptionComp = ({gameState, isFetching}) => {
    return (
        <>
            <div className={"mt-10 text-3xl mb-4"}>게임 설명</div>
            <div style={{fontFamily: G_MARKET_FONT}} className={"bg-gray-100 w-full h-48 rounded-3xl p-10 text-lg"}>
                <span>{isFetching && "게임을 기다리는중..."}</span>
                {gameState.description}
            </div>
        </>
    )
}

export {GameDescriptionComp};