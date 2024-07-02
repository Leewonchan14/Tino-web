import React from "react";
import { ReactComponent as Star } from "../../assets/star.svg";
import { range } from "../../utils/range";

const StarInputRadioButton = ({ star, setStar }) => {
  return (
    <div className={"mobile:my-4"}>
      <div className={"font-bold"}>게임을 평가 하세요</div>
      <div className={"flex gap-4 mobile:block"}>
        {range(1, 5).map((i) => (
          <StarEnum key={i} num={i} star={star} setStar={setStar} />
        ))}
      </div>
    </div>
  );
};

const StarEnum = ({ num, star, setStar }) => {
  const onClick = () => {
    setStar(num);
  };
  return (
    <>
      <div className={"inline cursor-pointer"} onClick={onClick}>
        {range(1, num).map((k, i) => (
          <Star
            key={num * 100 + k}
            width={20}
            height={20}
            fill={num === Math.floor(star) ? "orange" : "gray"}
            className={"inline"}
          />
        ))}
        <br />
      </div>
    </>
  );
};

export default StarInputRadioButton;
