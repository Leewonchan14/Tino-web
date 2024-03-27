import React from 'react';
import {useParams} from 'react-router-dom';
import TinoIcon from "../assets/tino_icon.png";

function GameDetailPage(props) {
    const params = useParams();

    const {gameId} = params;

    return (
        <div className={"px-14 py-8"}>
            <div className={"bg-gray-200 w-full h-96 rounded-3xl"}>

            </div>
            <div className={"mt-10 text-3xl mb-4"}>게임 설명</div>
            <div className={"bg-gray-200 w-full h-48 rounded-3xl p-10"}>
                이게임은 ...
            </div>

            <div className={"mt-10 text-3xl mb-4"}>Top 10</div>
            <div className={"bg-gray-200 w-full h-96 rounded-3xl mb-4"}>

            </div>
            <div className={"bg-gray-200 w-full h-48 rounded-3xl mb-4"}>

            </div>

            <div className={"mt-10 text-3xl mb-4"}>의견</div>
            <div className={"bg-gray-200 w-full h-96 rounded-3xl mb-4"}>

            </div>
            <div className={"bg-gray-200 w-full h-48 rounded-3xl mb-4  p-10"}>
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

export default GameDetailPage;