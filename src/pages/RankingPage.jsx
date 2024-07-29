import React, { Fragment } from "react";
import { Tabs, Tooltip } from "antd";
import UserRankList from "../components/ranking/UserRankList";
import DepartmentRankList from "../components/ranking/DepartmentRankList";
import InDepartment from "../components/ranking/InDepartment";
import GameRankList from "../components/ranking/GameRankList";

export const RANKING_PATH = "/rank";
const RankingPage = ({ ...rest }) => {
  return (
    <div className={"pb-20"}>
      <Tabs
        tabBarStyle={{ paddingLeft: "16px" }}
        size={"large"}
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
  const TOOLTIP_TEXT = [
    {
      upTitle: "게임마다 1등 부터 10등까지 20의 배수로 증가 (10명)",
      downTitle: "(1등)450점 ~ (10등)270점",
    },
    {
      upTitle: "게임마다 11등부터 50등까지 5의 배수로 증가 (40명)",
      downTitle: "(11등)250점 ~ (50등)55점",
    },
    {
      upTitle: "게임마다 51등부터 100등까지는 (50명)",
      downTitle: "(51등)50점 ~ (100등)1점",
    },
  ];

  return (
    <Tooltip
      overlayClassName={"max-w-full"}
      title={
        <ul
          className={
            "font-G_MARKET flex flex-col gap-1 w-full break-keep"
          }
        >
          <li className={"text-xl mb-2"}>유저 랭크 점수 산출 방식</li>
          <li className={"text-lg mb-1"}>
            각 Game마다 1~100등까지 결과들에 점수를 매겨 전체 게임
            유저 랭킹을 설정
          </li>
          {TOOLTIP_TEXT.map((text, index) => (
            <Text key={index} {...text} />
          ))}
        </ul>
      }
    >
      {children}
    </Tooltip>
  );
};

const Text = ({ upTitle, downTitle }) => {
  return (
    <li>
      {upTitle} <br />
      <span className={"text-[0.7rem]"}>{downTitle}</span>
    </li>
  );
};

export { RankingPage };
