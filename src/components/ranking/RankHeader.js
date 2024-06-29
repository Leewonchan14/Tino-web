import React from "react";

function RankHeader({ item, score }) {
  return (
    <thead className={"border-b border-gray-200"}>
      <tr className={""}>
        <th>순위</th>
        <th className={"text-start pl-5"}>{item}</th>
        <th>{score}</th>
      </tr>
    </thead>
  );
}

export default RankHeader;
