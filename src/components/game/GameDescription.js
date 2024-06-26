import {G_MARKET_FONT} from "../../constants/FontFamily";
import React from "react";

const GameDescription = ({gameState, isFetching}) => {
    return (
        <>
            <div className={"mt-10 text-3xl mb-4"}>게임 설명</div>
            <div style={{fontFamily: G_MARKET_FONT}} className={"bg-gray-100 w-full rounded-3xl p-10 text-lg"}>
                {isFetching ? "게임을 기다리는중..." : gameState.description}
            </div>
        </>
    )
}

export default GameDescription