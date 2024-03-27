import React, {useEffect, useState} from 'react';
import {GameCompList} from "../components/GameComp";
import GameController from "../api/game.controller";

function Home(props) {
    const [gameState, setGameState] = useState([])

    const findAllGame = async () => {
        const response = await GameController.findAll({
            page: 0,
            size: 10,
            sort: GameController.SORT.VIEW_COUNT
        });
        setGameState(response.data)
    }


    useEffect(() => {
        findAllGame();
    }, []);

    const testGame = {
        gameId: 51,
        gameName: "숫자맞추기",
        userId: "0",
        gameImage: "https://pbs.twimg.com/media/EA9UJBjU4AAdkCm.jpg",
        gameUrl: "http://54.210.228.54:8000/sample-game.html",
        targetScore: 0,
        scoreType: "INFINITE",
        description: "0~100까지 사이의 랜덤숫자를 맞추는 게임입니다.",
        createdAt: "2024-01-13T00:53:40.662",
        viewCount: 2181,
        reviewCount: 2
    }

    return (
        <>
            <h1 className={"text-6xl mt-28 font-bold"} style={{fontFamily: "GmarketSans"}}>티노 게임즈</h1>
            <h1 className={"mt-6 mb-12"}>한국공학대학교 게임 설명입니다. 이것은 한국공학대학교 게임 설명입니다.<br/> 이 문구는
                웹사이트 dinogmaes-bugo.s3 한국공학대학교 입니다.</h1>
            <h1 className={"text-2xl font-bold"}>전체 게임
                <span className={"text-blue-600"}> {gameState.length}개</span>
            </h1>
            <GameCompList gameState={gameState}/>
        </>
    );
}

export default Home;