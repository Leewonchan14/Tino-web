import React from 'react';
import viewcount_icon from "../../../assets/viewcount_icon.png";
import {useNavigate} from "react-router-dom";
import {G_MARKET_FONT} from "../../../constant/FontFamily";


const GameComp = ({game}) => {
    let navigate = useNavigate();

    const onClick = () => {
        navigate(`/games/${game.gameId}`);
    }

    return (
        <article onClick={onClick}
                 className={"border-2 border-gray-100 relative overflow-clip w-full rounded-2xl cursor-pointer bg-gray-50 flex-col"}>
            <picture className={"block h-44 w-full"}>
                <img className={"bg-gray-100 h-full w-full object-cover"}
                     src={game.gameImage} alt=""/>
            </picture>
            <section className={"h-40 p-6 w-full flex-col flex"}>
                <h1 className={"text-xl"} style={{fontFamily: G_MARKET_FONT}}>
                    {game.gameName}
                </h1>
                <span className={"w-full mt-2 text-gray-600 line-clamp-2"}>
                    {game.description}
                </span>
                <section className={"mt-auto flex"}>
                    <picture className={"w-6 justify-center items-center flex"}>
                        <img src={viewcount_icon} alt=""/>
                    </picture>
                    <span className={"ml-4"}>{game.viewCount}</span>
                </section>
            </section>
        </article>
    );
};

export default GameComp;