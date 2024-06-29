import React, { useState } from "react";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import useGetGameRankInfiniteQuery from "../../hooks/queries/rank/useGetGameRankInfiniteQuery";
import { RankCardTable } from "./RankCardTable";
import { GAME_SORT_MENU } from "../../constants/Game";
import GameSortMenu from "../game/GameSortMenu";

const GameRankList = () => {
  const [selectedRankOption, setSelectedRankOption] = useState(
    GAME_SORT_MENU[0]
  );

  let { gameState, isFetching, isSuccess, fetchNextPage } =
    useGetGameRankInfiniteQuery({ sortMenu: selectedRankOption });

  let { loadingComp } = useReactQueryInfiniteScroll({
    isFetching,
    fetchData: fetchNextPage,
  });

  return (
    <>
      <GameRankOptionList
        select={selectedRankOption}
        setSortMenu={setSelectedRankOption}
      />
      <RankCardTable
        isSuccess={isSuccess}
        item={"게임"}
        scoreName={selectedRankOption.text}
        states={gameState}
        getKey={(state) => state["gameId"]}
        getScore={(state) => state[selectedRankOption.score]}
        getText={(state) => state["gameName"]}
        getPicture={(state) => state["gameImage"]}
      />
      <LoadingSpinner loadingComp={loadingComp} isFetching={isFetching} />
    </>
  );
};

const GameRankOptionList = ({ select, setSortMenu }) => {
  return <GameSortMenu sortMenu={select} setSortMenu={setSortMenu} />;
};

export default GameRankList;
