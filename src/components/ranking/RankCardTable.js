import React from "react";
import Skeleton from "react-loading-skeleton";
import useGetQueryString from "../../hooks/recycle/useGetQueryString";
import { RANKING_MENU_LIST } from "../../pages/RankingPage";

export const RankCardTable = ({
  isSuccess,
  isFetching,
  scoreName,
  item,
  states,
  getKey,
  getPicture,
  getScore,
  getText,
  toGo,
}) => {
  return (
    <table className={"w-full"}>
      <RankHeader score={scoreName} item={item} />
      <RankingCardList
        {...{ isSuccess, isFetching, states }}
        {...{ getKey, getPicture, getScore, getText, toGo }}
      />
    </table>
  );
};

const RankHeader = ({ item, score }) => {
  return (
    <thead
      className={
        "sticky h-12 top-0 bg-primary-600 box-border text-white text-lg z-10"
      }
    >
      <tr className={""}>
        <th className={"w-24 rounded-l-2xl mobile:w-16 text-nowrap"}>
          순위
        </th>
        <th className={"text-start pl-4"}>{item}</th>
        <th className={"text-nowrap rounded-r-2xl mobile:w-28"}>
          {score}
        </th>
      </tr>
    </thead>
  );
};

const RankingCardList = ({
  isSuccess,
  isFetching,
  states,
  getKey,
  getPicture,
  getScore,
  getText,
  toGo = () => {},
}) => {
  return (
    <tbody>
      {isSuccess &&
        states.pages.map((page, index) =>
          page.map((state, subIndex) => (
            <RankCard
              key={getKey(state)}
              rank={index * 10 + subIndex + 1}
              score={getScore(state)}
              text={getText(state)}
              picture={getPicture(state)}
              toGo={toGo(state)}
            />
          ))
        )}
      {isFetching &&
        Array.from({ length: 12 }).map((_, index) => {
          return <RankCardSkeleton key={index} />;
        })}
    </tbody>
  );
};

const RankCard = ({
  rank,
  picture,
  score,
  text,
  toGo = () => {},
}) => {
  let [, , value] = useGetQueryString("tabKey");

  return (
    <tr className={"w-full h-24 border-b border-gray-200"}>
      <td className={"text-center"}>{rank}</td>
      <td className={""}>
        <div
          onClick={() => {
            toGo();
          }}
          className={`flex items-center text-nowrap ${value === RANKING_MENU_LIST[0].name && "cursor-pointer"}`}
        >
          <picture
            className={
              "flex h-16 w-16 mr-4 rounded-full border-2 bg-white overflow-clip"
            }
          >
            <img
              draggable={false}
              src={picture}
              alt={"logo"}
              className={"object-cover"}
            />
          </picture>
          {text}
        </div>
      </td>
      <td className={"text-center"}>
        <div className={"line-clamp-2 px-4"}>{score}</div>
      </td>
    </tr>
  );
};

const RankCardSkeleton = () => {
  return (
    <tr
      className={"w-full h-22 items-center border-b border-gray-200"}
    >
      <td className={"text-center flex justify-center"}>
        <div className={"w-10"}>
          <Skeleton />
        </div>
      </td>
      <td>
        <div className={"flex items-center"}>
          <div
            className={
              "h-16 w-16 rounded-full border-2 overflow-clip"
            }
          >
            <Skeleton
              containerClassName={"flex h-full"}
              className={"h-16 w-16"}
            />
          </div>
          <div className={"w-40 ml-2"}>
            <Skeleton containerClassName={"flex h-full"} />
          </div>
        </div>
      </td>
      <td className={"flex justify-center items-center h-16"}>
        <div className={"w-10"}>
          <Skeleton />
        </div>
      </td>
    </tr>
  );
};
