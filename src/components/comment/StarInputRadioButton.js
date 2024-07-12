import React, { useEffect } from "react";
import { ReactComponent as Star } from "../../assets/star.svg";
import { range } from "../../utils/range";

const StarInputRadioButton = ({ star, setStar }) => {
  return (
    <div className={"mobile:my-4"}>
      <div className={"font-bold"}>게임을 평가 하세요</div>
      <div className={"flex mobile:block"}>
        {range(1, 6).map((i) => (
          <div key={i} className={"cursor-pointer"} onClick={() => setStar(i)}>
            <Star
              width={20}
              height={20}
              fill={i <= Math.floor(star) ? "orange" : "gray"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarInputRadioButton;
