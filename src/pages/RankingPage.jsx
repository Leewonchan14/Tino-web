import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import UserRankList from "../components/ranking/UserRankList";
import DepartmentRankList from "../components/ranking/DepartmentRankList";
import InDepartment from "../components/ranking/InDepartment";
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
  const [selectedMenu, setSelectedMenu] = useState(RANKING_MENU_LIST[0]);

  const SelectedSection = selectedMenu.children;

  const onChange = (index) => {
    setSelectedMenu(RANKING_MENU_LIST[index]);
  };

  return (
    <div className={"pb-20"}>
      <Tabs
        defaultActiveKey="1"
        centered
        size={"middle"}
        items={RANKING_MENU_LIST.map((menu, index) => ({
          label: menu.name,
          key: index,
        }))}
        onChange={onChange}
      />
      <SelectedSection />
    </div>
  );
};

export { RankingPage };
