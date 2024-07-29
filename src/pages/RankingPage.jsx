import React, { Fragment, useState } from "react";
import { Tabs, Tooltip } from "antd";
import UserRankList from "../components/ranking/UserRankList";
import DepartmentRankList from "../components/ranking/DepartmentRankList";
import InDepartment from "../components/ranking/InDepartment";
import GameRankList from "../components/ranking/GameRankList";
import useGetQueryString from "../hooks/recycle/useGetQueryString";

export const RANKING_PATH = "/rank";
const RankingPage = ({ ...rest }) => {
  const [_, setQuery, tabKey] = useGetQueryString("tabKey");
  const [currentTabKey, setCurrentTabKey] = useState(
    Number(tabKey) || 0
  );

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
  const RANKING_MENU_LIST = [
    {
      name: "게임 랭킹",
      Tooltip: Fragment,
      children: <GameRankList />,
    },
    {
      name: "유저 랭킹",
      Tooltip: UserRankToolTip,
      children: <UserRankList />,
    },
    {
      name: "학과별 랭킹",
      Tooltip: Fragment,
      children: <DepartmentRankList />,
    },
    {
      name: "학과내 랭킹",
      Tooltip: Fragment,
      children: <InDepartment />,
    },
  ];
  return RANKING_MENU_LIST.map((menu, index) => ({
    label: <menu.Tooltip>{menu.name}</menu.Tooltip>,
    key: index,
    children: menu.children,
  }));
};

const UserRankToolTip = ({ children }) => {
  return (
    <Tooltip
      trigger={["click"]}
      color={"rgb(37, 99, 235, 0.9)"}
      overlayClassName={"max-w-full font-bold"}
      overlayInnerStyle={{
        color: "white",
        boxShadow: "0 0 20px 4px #000",
      }}
      title={
        <ul
          className={
            "font-G_MARKET px-4 flex flex-col gap-1 w-full break-keep !font-black"
          }
        >
          <li className={"text-xl mb-2"}>유저 랭크 점수 산출 방식</li>
          <li className={"my-1"}>
            각 Game마다 1~100등까지 결과들에 점수를 매겨 전체 게임
            유저 랭킹을 설정
          </li>
          <ol className={"list-disc pl-4"}>
            <li>1 ~ 10등 => 450점 ~ 270점</li>
            <li>11 ~ 50등 => 250점 ~ 55점</li>
            <li>51 ~ 100등 => 50점 ~ 1점</li>
          </ol>
        </ul>
      }
    >
      {children}
    </Tooltip>
  );
};

export { RankingPage };
