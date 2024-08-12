import React, { Fragment, useEffect, useState } from "react";
import { Tabs } from "antd";
import UserRankList from "../components/ranking/UserRankList";
import DepartmentRankList from "../components/ranking/DepartmentRankList";
import InDepartment from "../components/ranking/InDepartment";
import GameRankList from "../components/ranking/GameRankList";
import useGetQueryString from "../hooks/recycle/useGetQueryString";
import UserRankToolTip from "../components/ranking/UserRankToolTip";

export const RANKING_PATH = "/rank";

export const RANKING_MENU_LIST = [
  {
    name: "게임 랭킹",
    Tooltip: Fragment,
    children: GameRankList,
  },
  {
    name: "유저 랭킹",
    Tooltip: UserRankToolTip,
    children: UserRankList,
  },
  {
    name: "학과별 랭킹",
    Tooltip: Fragment,
    children: DepartmentRankList,
  },
  {
    name: "학과내 랭킹",
    Tooltip: Fragment,
    children: InDepartment,
  },
];

const RankingPage = ({ ...rest }) => {
  const [_, setQuery, tabKey] = useGetQueryString("tabKey");
  const [currentTabKey, setCurrentTabKey] = useState(
    tabKey || RANKING_MENU_LIST[0].name
  );

  useEffect(() => {
    setQuery(currentTabKey);
  }, []);

  return (
    <div className={"pb-20"}>
      <Tabs
        type={"card"}
        activeKey={currentTabKey}
        onTabClick={(key, e) => {
          setCurrentTabKey(key);
          setQuery(key);
        }}
        size={"small"}
        items={renderTabItems()}
        rootClassName={""}
      />
    </div>
  );
};

const renderTabItems = () => {
  return RANKING_MENU_LIST.map(
    ({ children: Child, ...menu }, index) => ({
      label: <menu.Tooltip>{menu.name}</menu.Tooltip>,
      key: menu.name,
      children: <Child />,
    })
  );
};

export { RankingPage };
