import GameCard from "./GameCard";
import React from "react";

const GameList = ({isSuccess, gameState}) => {
    return (
        <section className={"w-full"}>
            {isSuccess && gameState.pages.map((page, index) => (
                page.map((game) => <GameCard key={index} game={game}/>)
            ))}
        </section>
    )
}

export default GameList;