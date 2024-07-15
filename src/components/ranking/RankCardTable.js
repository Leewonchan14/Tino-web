import React from "react";
import Skeleton from "react-loading-skeleton";

export const RankCardTable = ({
  scoreName,
  item,
  isSuccess,
  states,
  getKey,
  getPicture,
  getScore,
  getText,
}) => {
  return (
    <table className={"w-full"}>
      <RankHeader score={scoreName} item={item} />
      <RankingCardList
        isSuccess={isSuccess}
        states={states}
        getKey={getKey}
        getPicture={getPicture}
        getScore={getScore}
        getText={getText}
      />
    </table>
  );
};

const RankHeader = ({ item, score }) => {
  return (
    <thead
      className={
        "sticky h-12 top-0 bg-primary-600 box-border text-white text-lg"
      }
    >
      <tr className={""}>
        <th className={"w-24"}>순위</th>
        <th className={"text-start pl-4"}>{item}</th>
        <th className={"text-nowrap"}>{score}</th>
      </tr>
    </thead>
  );
};

const RankingCardList = ({
  isSuccess,
  states,
  getKey,
  getPicture,
  getScore,
  getText,
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
            />
          ))
        )}
      {!isSuccess &&
        Array.from({ length: 9 }).map((_, index) => {
          return <RankCardSkeleton key={index} />;
        })}
    </tbody>
  );
};

const RankCard = ({ rank, picture, score, text }) => {
  return (
    <tr className={"w-full h-24 border-b border-gray-200"}>
      <td className={"text-center"}>{rank}</td>
      <td className={""}>
        <div className={"flex items-center text-nowrap"}>
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
