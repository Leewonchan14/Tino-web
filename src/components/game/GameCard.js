import React from "react";
import viewcount_icon from "../../assets/viewcount_icon.png";
import { useNavigate } from "react-router-dom";
import { GAME_PATH_WITHOUT_PARAM } from "../../pages/GameDetailPage";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GameCard = ({ game, className }) => {
  let navigate = useNavigate();
  const onClick = () => {
    navigate(`${GAME_PATH_WITHOUT_PARAM}${game.gameId}`);
  };

  return (
    <article
      onClick={onClick}
      className={`border-2 border-gray-100 relative overflow-clip w-full rounded-2xl cursor-pointer bg-gray-50 flex-col 
        ${className}`}
    >
      <picture className={"block h-44 w-full"}>
        <img
          draggable={"false"}
          className={"bg-gray-100 h-full w-full object-cover"}
          src={game.gameImage}
          alt=""
        />
      </picture>
      <section className={"h-40 p-6 w-full flex-col flex"}>
        <h1 className={"text-xl font-G_MARKET"}>{game.gameName}</h1>
        <span className={"w-full mt-2 text-gray-600 line-clamp-2"}>
          {game.description}
        </span>
        <section className={"mt-auto flex"}>
          <picture className={"w-6 justify-center items-center flex"}>
            <img src={viewcount_icon} alt="" />
          </picture>
          <span className={"ml-4"}>{game.viewCount}</span>
        </section>
      </section>
    </article>
  );
};

export const GameCardSkeleton = () => {
  return (
    <article
      className={
        "border-2 border-gray-100 relative overflow-clip w-full rounded-2xl cursor-pointer bg-gray-50"
      }
    >
      <div className={"h-44 flex flex-col"}>
        <Skeleton
          borderRadius={0}
          containerClassName={"flex h-full"}
          className={"h-full"}
        />
      </div>

      <section className={"h-40 p-6 flex-col flex"}>
        <h1 className={"text-2xl"}>
          <Skeleton />
        </h1>
        <span className={"mt-2"}>
          <Skeleton count={2} />
        </span>
        <span className={"mt-auto w-20"}>
          <Skeleton className={""} />
        </span>
      </section>
    </article>
  );
};

export default GameCard;
