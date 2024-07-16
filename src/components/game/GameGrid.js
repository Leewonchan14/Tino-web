import React from "react";
import GameCard, { GameCardSkeleton } from "./GameCard";
import { range } from "../../utils/range";
import { uuid } from "../../utils/uuid";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";

const GameGrid = ({
  isSuccess,
  isFetching,
  isAddOn = false,
  emptyMessage = "",
  gameState,
  fetchNextPage,
  className = "",
  ...props
}) => {
  let { loadingComp } = useReactQueryInfiniteScroll({
    fetchData: fetchNextPage,
    isFetching,
  });

  let isEmpty = !isFetching && gameState.pages.flat().length === 0;

  return (
    <div className={"relative flex justify-center items-center"}>
      <span className={"absolute font-G_MARKET my-4 z-10"}>
        {isEmpty && emptyMessage}
      </span>
      <section
        className={`grid grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 mobile:grid-cols-1 min-w-[300px] gap-6 w-full 
      ${className} ${isEmpty && "blur"}`}
      >
        {isSuccess &&
          gameState.pages
            .flat()
            .map((game) => (
              <GameCard key={game.gameId} game={game} />
            ))}
        {(isEmpty || isFetching) &&
          range(6).map(() => <GameCardSkeleton key={uuid()} />)}
        {/*// renderGameCardsWithSkeletons(*/}
        {/*//   gameState.pages.flat(),*/}
        {/*//   isAddOn,*/}
        {/*//   emptyMessage*/}
        {/*// )}*/}
        <LoadingSpinner loadingComp={loadingComp} isFetching={true} />
      </section>
    </div>
  );
};

const renderGameCardsWithSkeletons = (
  games,
  isAddOn,
  emptyMessage
) => {
  const result = [];
  games.forEach((game, index) => {
    result.push(<GameCard key={game.gameId} game={game} />);
    if (isAddOn && (index + 1) % 4 === 0) {
      result.push(<GameCardSkeleton key={uuid()} />);
    }
  });
  return result;
};

export default GameGrid;
