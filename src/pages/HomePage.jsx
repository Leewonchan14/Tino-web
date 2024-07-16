import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import GameGrid from "../components/game/GameGrid";
import GameSortMenu from "../components/game/GameSortMenu";
import { GAME_SORT_MENU } from "../constants/Game";
import useGetGamesInfiniteQuery from "../hooks/queries/game/useGetGamesInfiniteQuery";

const HOME_PATH = "/";
export const GAME_CARD_FETCH_SIZE = 6;

function HomePage(props) {
  let [selectedGameSortMenu, setSelectedGameSortMenu] = useState(
    GAME_SORT_MENU[0]
  );

  let { isSuccess, isFetching, gameState, fetchNextPage } =
    useGetGamesInfiniteQuery({
      selectedGameSortMenu,
      pageSize: GAME_CARD_FETCH_SIZE,
    });

  return (
    <>
      <h1
        className={
          "font-G_MARKET text-6xl mt-28 font-bold mobile:text-4xl mobile:mt-6"
        }
      >
        티노 게임즈
      </h1>

      <h1 className={"mt-6 mb-12"}>
        한국공학대학교 비공식 개발동아리 데브티노s 입니다. <br />이
        곳에서 다양한 게임을 경험하고 학교내 다른 학과와 경쟁하세요!
      </h1>

      <GameSortMenu
        sortMenu={selectedGameSortMenu}
        setSortMenu={setSelectedGameSortMenu}
        className={""}
      />

      <GameGrid
        isFetching={isFetching}
        isSuccess={isSuccess}
        isAddOn={true}
        gameState={gameState}
        fetchNextPage={fetchNextPage}
        selectedGameSortMenu={selectedGameSortMenu}
      />

      <Footer />
    </>
  );
}

export { HomePage, HOME_PATH };
