import React, { useState } from "react";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import useGetGameRankInfiniteQuery from "../../hooks/queries/rank/useGetGameRankInfiniteQuery";
import { RankCardTable } from "./RankCardTable";
import { GAME_SORT_MENU, REVIEW_COUNT } from "../../constants/Game";
import GameSortMenu from "../game/GameSortMenu";
import { timeToYearMonthDay } from "../../utils/timeConverter";

const GameRankList = () => {
  const [selectedRankOption, setSelectedRankOption] = useState(
    GAME_SORT_MENU[0]
  );

  let {
    gameState,
    isFetching,
    hasNextPage,
    isSuccess,
    fetchNextPage,
  } = useGetGameRankInfiniteQuery({ sortMenu: selectedRankOption });

  let { loadingComp } = useReactQueryInfiniteScroll({
    isFetching,
    hasNextPage,
    fetchData: fetchNextPage,
  });

  return (
    <>
      <GameRankOptionList
        select={selectedRankOption}
        setSortMenu={setSelectedRankOption}
      />
      <RankCardTable
        {...{ isSuccess, isFetching }}
        item={"게임"}
        scoreName={selectedRankOption.text}
        states={gameState}
        getKey={(state) => state["gameId"]}
        getScore={(state) => {
          if (selectedRankOption.value === REVIEW_COUNT) {
            return timeToYearMonthDay(
              state[selectedRankOption.score]
            );
          }
          return state[selectedRankOption.score];
        }}
        getText={(state) => state["gameName"]}
        getPicture={(state) => state["gameImage"]}
      />
      <LoadingSpinner
        loadingComp={loadingComp}
        isFetching={isFetching}
      />
    </>
  );
};

const GameRankOptionList = ({ select, setSortMenu }) => {
  return (
    <GameSortMenu
      sortMenu={select}
      setSortMenu={setSortMenu}
      className={"mt-4"}
      itemClassName={"!p-2 !px-4 !w-auto"}
    />
  );
};

export default GameRankList;
