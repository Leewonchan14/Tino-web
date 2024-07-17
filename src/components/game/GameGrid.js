import React, { Fragment } from "react";
import GameCard, { GameCardSkeleton } from "./GameCard";
import { range } from "../../utils/range";
import { uuid } from "../../utils/uuid";
import LoadingSpinner from "../common/spinner/LoadingSpinner";

const GameGrid = ({ hooks, args = [], withAds = false }) => {
  let { isSuccess, isFetching, gameState, loadingComp } = hooks(
    ...args
  );

  const renderGameCard = () => {
    return gameState.pages.flat().map((game, index) => (
      <Fragment key={game.gameId}>
        <GameCard game={game} />
        {withAds && index % 4 === 3 && <GameCardSkeleton />}
      </Fragment>
    ));
  };

  const renderSkeletonGameCard = (length) => {
    if (!isFetching) return;
    return range(length).map(() => <GameCardSkeleton key={uuid()} />);
  };

  return (
    <section
      className={`grid grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 mobile:grid-cols-1 min-w-[300px] gap-6 w-full`}
    >
      {isSuccess && renderGameCard()}
      {renderSkeletonGameCard(6)}
      <LoadingSpinner loadingComp={loadingComp} />
    </section>
  );
};

export default GameGrid;
