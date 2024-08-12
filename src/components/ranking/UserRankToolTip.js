import {Tooltip} from "antd";
import React from "react";

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

export default UserRankToolTip;