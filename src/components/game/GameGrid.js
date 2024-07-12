import React from "react";
import GameCard, { GameCardSkeleton } from "./GameCard";
import { range } from "../../utils/range";
import { uuid } from "../../utils/uuid";

const GameGrid = ({ isFetching, isSuccess, gameState }) => {
  return (
    <section
      className={
        "grid grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 mobile:grid-cols-1 min-w-[300px] gap-6 w-full"
      }
    >
      {isSuccess && renderGameCardsWithSkeletons(gameState.pages.flat())}
      {isFetching && range(6).map(() => <GameCardSkeleton key={uuid()} />)}
    </section>
  );
};

const renderGameCardsWithSkeletons = (games) => {
  const result = [];
  games.forEach((game, index) => {
    result.push(<GameCard key={game.gameId} game={game} />);
    if ((index + 1) % 4 === 0) {
      result.push(<GameCardSkeleton key={uuid()} />);
    }
  });
  return result;
};

export default GameGrid;
