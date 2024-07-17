import React from "react";
import useGetDepartmentRankQuery from "../../hooks/queries/rank/useGetDepartmentRankQuery";
import { RankCardTable } from "./RankCardTable";
import { MAJOR } from "../../constants/Major";

const DepartmentRankList = () => {
  let { isSuccess, isFetching, departmentState } =
    useGetDepartmentRankQuery();

  return (
    <>
      <RankCardTable
        {...{ isSuccess, isFetching }}
        item={"학과"}
        scoreName={"점수"}
        states={{ pages: [departmentState] }}
        getKey={(state) => state["totalRank"]}
        getScore={(state) => state["rankWeight"]}
        getText={(state) => state["major"]}
        getPicture={(state) =>
          MAJOR.find((major) => major.name === state["major"]).url
        }
      />
    </>
  );
};

export default DepartmentRankList;
