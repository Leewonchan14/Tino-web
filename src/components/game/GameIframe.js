import React, { useEffect, useRef, useState } from "react";
import { userStore } from "../../stores/userStore";
import {
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import { delay } from "../../utils/delay";

const GameIframe = ({ gameState, isFetching }) => {
  const [isGameStart, setIsGameStart] = useState(false);
  const [anchorScrollTop, setAnchorScrollTop] = useState(0);
  const anchor = useRef(null);
  useEffect(() => {
    console.log(anchor.current.getBoundingClientRect().top);
    setAnchorScrollTop(anchor.current.getBoundingClientRect().top);
  }, [anchor.current]);

  const onGameStart = async () => {
    window.scroll(0, anchorScrollTop);
    await delay({ milliseconds: 0 });
    disableBodyScroll(document.body);
    setIsGameStart(true);
  };

  const onGameEnd = async () => {
    enableBodyScroll(document.body);
    setIsGameStart(false);
  };

  let { userId } = userStore((state) => state);
  return (
    <>
      <div className={"w-full"} ref={anchor}></div>
      <div
        onClick={onGameEnd}
        className={`visible z-[1000] shadow-[0_0_10px_1px_rgb(0,0,0,0.3)] rounded-lg fixed bottom-20 right-12 bg-red-500 font-G_MARKET font-bold text-white p-6 cursor-pointer ${!isGameStart && "invisible"}`}
      >
        나가기
      </div>
      <div
        className={
          "w-full overflow-clip h-[800px] rounded-3xl flex justify-center items-center relative border-2"
        }
      >
        {!isGameStart && (
          <div
            className={
              "z-10 absolute flex justify-center w-full h-full  bg-white bg-opacity-10"
            }
          >
            <div
              className={
                "absolute shadow-[0_0_10px_1px_rgb(0,0,0,0.3)] flex flex-col items-center bg-white top-1/3 px-10 p-4 rounded-xl border-2 text-nowrap"
              }
            >
              <div
                onClick={onGameStart}
                className={
                  "inline-flex justify-center text-2xl font-bold text-white p-3 rounded-xl mb-4 bg-primary-600 cursor-pointer"
                }
              >
                게임 시작
              </div>{" "}
              <div className={"text-center"}>
                게임을 시작하면 스크롤이 고정 됩니다. <br />
                게임에서 나오고 싶다면 오른쪽 아래 나가기 버튼을
                눌러주세요
              </div>
            </div>
          </div>
        )}

        {!isFetching && (
          <div
            className={`w-full h-full ${!isGameStart && "blur-sm"}`}
          >
            <iframe
              style={{ zIndex: -100 }}
              className={`w-full h-full`}
              src={`${gameState.gameUrl}?userId=${userId}`}
              title={gameState.gameName}
              onLoad={() => {
                // disableBodyScroll(document.body);
                // setIsOnLoadIframe(true);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default GameIframe;
