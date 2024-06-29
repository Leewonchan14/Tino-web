import React from "react";
import GameCard, {GameCardSkeleton} from "./GameCard";

const GameGrid = ({isSuccess, gameState}) => {
    return (
        <section className={"grid grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 mobile:grid-cols-1 min-w-[300px] gap-6 w-full"}>
            {isSuccess && gameState.pages.map((page, index) => (
                page.map((game) => <GameCard key={game.gameId} game={game}/>)
            ))}
            {!isSuccess && Array.from({length: 6}).map((_, index) => <GameCardSkeleton key={index}/>)}
        </section>
    );
};

export default GameGrid;