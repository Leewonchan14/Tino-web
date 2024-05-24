import React from "react";
import GameCard from "./GameCard";

const GameGrid = ({isSuccess, gameState}) => {
    return (
        <section className={"grid grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 min-w-[300px] gap-6 w-full"}>
            {isSuccess && gameState.pages.map((page, index) => (
                page.map((game) => <GameCard key={game.gameId} game={game}/>)
            ))}
        </section>
    );
};

export default GameGrid;