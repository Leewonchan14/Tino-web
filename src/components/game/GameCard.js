import React, { useEffect, useState } from "react";
import viewcount_icon from "../../assets/viewcount_icon.png";
import { useNavigate } from "react-router-dom";
import { GAME_PATH_WITHOUT_PARAM } from "../../pages/GameDetailPage";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

const GameCard = ({ game, className }) => {
  let navigate = useNavigate();
  const onClick = () => {
    navigate(`${GAME_PATH_WITHOUT_PARAM}${game.gameId}`);
  };

  return (
    <article
      onClick={onClick}
      className={`border-2 border-gray-100 relative w-full rounded-2xl cursor-pointer bg-gray-50 flex-col 
        ${className}`}
    >
      <picture
        className={"flex items-start rounded-t-2xl h-44 w-full"}
      >
        <img
          draggable={"false"}
          className={
            "bg-gray-100 w-full object-cover max-h-44 rounded-t-2xl transition-all duration-100 " +
            "hover:rounded-xl hover:max-h-60 hover:shadow-[0_10px_30px_2px_rgba(0,0,0,0.3)] hover:scale-100"
          }
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

export const AddComp = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [addState, setAddState] = useState({
    id: 5,
    link: "https://forms.gle/NHXvbiCRTHcXvFw3A",
    title: "내가 이거보단 잘만들겠네!!",
    description: "(15초 소요) 서비스의 웹게임 개발자로 등록해주세요",
    thumbnail:
      "https://dev-tinos-img.s3.ap-northeast-2.amazonaws.com/survey.png",
  });

  const fetchAdd = async () => {
    setIsFetching(true);
    const response = await axios.request({
      method: "get",
      url: process.env.REACT_APP_ADD_SERVICE,
    });

    setAddState(response.data);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchAdd();
  }, []);

  return (
    <article
      className={
        "border-2 border-gray-100 relative overflow-clip w-full rounded-2xl cursor-pointer bg-gray-50"
      }
    >
      <div className={"h-44 flex flex-col"}>
        {isFetching && (
          <Skeleton
            borderRadius={0}
            containerClassName={"flex h-full"}
            className={"h-full"}
          />
        )}
        {!isFetching && (
          <div className={"w-full h-full relative"}>
            <img
              className={"h-full w-full object-cover"}
              src={addState.thumbnail}
              alt=""
            />
            <AddMark />
          </div>
        )}
      </div>

      <section className={"h-40 p-6 flex-col flex"}>
        <h1 className={"text-2xl"}>
          {isFetching && <Skeleton />}
          {!isFetching && addState.title}
        </h1>
        <span className={"mt-2"}>
          {isFetching && <Skeleton count={2} />}
          {!isFetching && addState.description}
        </span>
        {isFetching && (
          <span className={"mt-auto w-20"}>
            <Skeleton className={""} />
          </span>
        )}
      </section>
    </article>
  );
};

const AddMark = () => {
  return (
    <div
      className={
        "bg-yellow-200 rounded-xl p-2 absolute right-2 top-2 text-black font-bold flex justify-center items-center"
      }
    >
      AD
    </div>
  );
};

export default GameCard;
