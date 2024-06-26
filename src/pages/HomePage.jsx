import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import { G_MARKET_FONT } from "../constants/FontFamily";
import GameGrid from "../components/game/GameGrid";
import GameSortMenu from "../components/game/GameSortMenu";
import LoadingSpinner from "../components/common/spinner/LoadingSpinner";
import useGetGamesInfiniteQuery from "../hooks/queries/game/useGetGamesInfiniteQuery";
import useReactQueryInfiniteScroll from "../hooks/recycle/useReactQueryInfiniteScroll";
import { GAME_SORT_MENU } from "../constants/Game";

const HOME_PATH = "/";

function HomePage(props) {
  let [selectedGameSortMenu, setSelectedGameSortMenu] = useState(
    GAME_SORT_MENU[0]
  );

  let { isSuccess, isFetching, gameState, fetchNextPage } =
    useGetGamesInfiniteQuery({ selectedGameSortMenu, pageSize: 6 });

  let { loadingComp } = useReactQueryInfiniteScroll({
    fetchData: fetchNextPage,
    isFetching,
  });

  return (
    <>
      <h1
        className={"text-6xl mt-28 font-bold mobile:text-4xl mobile:mt-6"}
        style={{ fontFamily: G_MARKET_FONT }}
      >
        티노 게임즈
      </h1>

      <h1 className={"mt-6 mb-12"}>
        한국공학대학교 게임 설명입니다. 이것은 한국공학대학교 게임 설명입니다.
        <br />이 문구는 웹사이트 dinogmaes-bugo.s3 한국공학대학교 입니다.
      </h1>

      <GameSortMenu
        sortMenu={selectedGameSortMenu}
        setSortMenu={setSelectedGameSortMenu}
        className={""}
      />

      <GameGrid isSuccess={isSuccess} gameState={gameState} />

      <LoadingSpinner loadingComp={loadingComp} isFetching={true} />

      <Footer />
    </>
  );
}

export { HomePage, HOME_PATH };
