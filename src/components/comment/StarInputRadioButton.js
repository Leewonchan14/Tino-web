import React from "react";
import { ReactComponent as Star } from "../../assets/star.svg";
import { range } from "../../utils/range";
import { uuid } from "../../utils/uuid";

const StarInputRadioButton = ({ star, setStar }) => {
  return (
    <div className={"mobile:my-4"}>
      <div className={"font-bold"}>게임을 평가 하세요</div>
      <div className={"flex"}>{renderStars({ star, setStar })}</div>
    </div>
  );
};

const renderStars = ({ star, setStar }) => {
  return range(1, 6).map((i) => (
    <div
      key={uuid()}
      className={"cursor-pointer"}
      onClick={() => setStar(i)}
    >
      <Star
        width={32}
        height={32}
        fill={i <= Math.floor(star) ? "orange" : "gray"}
      />
    </div>
  ));
};

export default StarInputRadioButton;
