import React, { useState } from "react";
import { Tabs } from "antd";
import UserRankList from "../components/ranking/UserRankList";
import DepartmentRankList from "../components/ranking/DepartmentRankList";
import InDepartment from "./Rank/InDepartment";
import GameRankList from "../components/ranking/GameRankList";

export const RANKING_PATH = "/rank";
const RANKING_MENU_LIST = [
  {
    name: "게임 랭킹",
    children: GameRankList,
  },
  {
    name: "유저 랭킹",
    children: UserRankList,
  },
  {
    name: "학과별 랭킹",
    children: DepartmentRankList,
  },
  {
    name: "학과내 랭킹",
    children: InDepartment,
  },
];

const RankingPage = ({ ...rest }) => {
  const [, setSelectedMenu] = useState(RANKING_MENU_LIST[0]);

  const onClickMenu = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Tabs
        rootClassName={"pb-20"}
        defaultActiveKey="1"
        centered
        size={"middle"}
        items={RANKING_MENU_LIST.map((menu, index) => ({
          label: menu.name,
          key: index,
          children: menu.children({
            key: index,
            menu,
            onClickMenu: () => onClickMenu(menu),
          }),
        }))}
      />
    </>
  );
};

export { RankingPage };
