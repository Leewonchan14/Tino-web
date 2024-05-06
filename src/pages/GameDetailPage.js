import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import TinoIcon from "../assets/tino_icon.png";
import {useGetOneGame} from "../hooks/useGetOneGame";
import {LogCompListIntGameDetailPage, OwnLogCardComp} from "../components/LogComp";

const GAME_PATH = "/games/:gameId";

function GameDetailPage(props) {
    let [gameState, _, findGameById] = useGetOneGame({});
    let {gameId} = useParams();

    useEffect(() => {
        findGameById(gameId);
    }, []);


    return (
        <div className={"px-14 pb-8"}>
            <div className={"w-full h-[100vh] rounded-3xl"}>
                <iframe className={"w-full h-full"} src={gameState.gameUrl} title={gameState.gameName}/>
            </div>
            <div className={"mt-10 text-3xl mb-4"}>게임 설명</div>
            <div className={"bg-gray-100 w-full h-48 rounded-3xl p-10"}>
                {gameState.description}
            </div>

            <div className={"mt-10 text-3xl mb-4"}>Top 10</div>
            <div className={"border-2 w-full h-96 rounded-3xl mb-4 flex"}>
                <div className={"w-52 flex justify-center items-center"}>
                    <OwnLogCardComp gameId={gameId} userId={112}/>
                </div>
                <LogCompListIntGameDetailPage gameId={gameId}/>
            </div>

            <div className={"mt-10 text-3xl mb-4"}>의견</div>
            <div className={"bg-gray-100 w-full h-96 rounded-3xl mb-4"}>

            </div>
            <div className={"bg-gray-100 w-full h-48 rounded-3xl mb-4  p-10"}>
                <div className={"flex items-center mb-4"}>
                    <div className={"rounded-full bg-gray-400 mr-4"}>
                        <img className={"h-14"} src={TinoIcon} alt=""/>
                    </div>
                    <div className={"text-2xl"}>유저이름</div>
                </div>
                <div>이게임이 똥겜인 이유...</div>
            </div>
        </div>
    );
}

export {GameDetailPage, GAME_PATH};