import React from 'react';
import {GameCompList} from "../components/GameComp";

function Home(props) {
    const testGame = {
        gameId: 0,
        gameName: "test game",
        gameDescription: "this is test game",
        // gameImage : "https://via.placeholder.com/150",
    }

    const gameState = {
        games: Array(10).fill(testGame),
    }

        return (
        <>
            <h1 className={"text-6xl mt-28 font-bold"} style={{fontFamily:"GmarketSans"}}>티노 게임즈</h1>
            <h1 className={"mt-6 mb-12"}>한국공학대학교 게임 설명입니다. 이것은 한국공학대학교 게임 설명입니다.<br/> 이 문구는
                웹사이트 dinogmaes-bugo.s3  한국공학대학교 입니다.</h1>
            <h1 className={"text-2xl font-bold"}>전체 게임
                <span className={"text-blue-600"}> {gameState.games.length}개</span>
            </h1>
            <GameCompList gameState={gameState}/>
        </>
    );
}

export default Home;