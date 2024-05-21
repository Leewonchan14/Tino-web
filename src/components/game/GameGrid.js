import React from "react";
import GameCard from "./GameCard";

const GameGrid = ({isSuccess, gameState}) => {
    return (
        <section className={"grid grid-cols-3 gap-6 w-full"}>
            {isSuccess && gameState.pages.map((page, index) => (
                page.map((game) => <GameCard key={index} game={game}/>)
            ))}
        </section>
    );
};

export default GameGrid;