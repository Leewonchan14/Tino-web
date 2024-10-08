import React, { useState } from "react";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import useGetGameRankInfiniteQuery from "../../hooks/queries/rank/useGetGameRankInfiniteQuery";
import { RankCardTable } from "./RankCardTable";
import {
  GAME_SORT_MENU,
  RECENT,
  REVIEW_COUNT,
} from "../../constants/Game";
import GameSortMenu from "../game/GameSortMenu";
import { timeToYearMonthDay } from "../../utils/timeConverter";
import useGetQueryString from "../../hooks/recycle/useGetQueryString";
import { useNavigate } from "react-router-dom";

const GameRankList = () => {
  const [_, __, gameSortValue] = useGetQueryString("gameSortValue");
  const [selectedRankOption, setSelectedRankOption] = useState(
    GAME_SORT_MENU.find((menu) => menu.value === gameSortValue) ||
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

  let navigate = useNavigate();

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
          if (selectedRankOption.value === RECENT) {
            return timeToYearMonthDay(
              state[selectedRankOption.score]
            );
          }
          return state[selectedRankOption.score];
        }}
        getText={(state) => state["gameName"]}
        getPicture={(state) => state["gameImage"]}
        toGo={(state) => () => navigate(`/games/${state["gameId"]}`)}
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
      itemClassName={"!p-2 !px-4 !w-auto !rounded-2xl"}
    />
  );
};

export default GameRankList;
