import React from "react";
import { MAJOR } from "../../constants/Major";
import { RankCardTable } from "../../components/ranking/RankCardTable";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import default_image from "../../assets/default_image.jpg";
import LoadingSpinner from "../../components/common/spinner/LoadingSpinner";
import { useGetInDepartmentRankQuery } from "../../hooks/queries/rank/useGetInDepartmentRankQuery";

export const IN_DEPARTMENT_PATH = "/rank/inDepartment";

const InDepartment = () => {
  const {
    inDepartmentState,
    isFetching,
    fetchNextPage,
    isSuccess,
    selectMajor,
    onChange,
  } = useGetInDepartmentRankQuery();

  let { loadingComp } = useReactQueryInfiniteScroll({
    fetchData: fetchNextPage,
    isFetching,
  });

  return (
    <>
      <InDepartmentRankOption selectMajor={selectMajor} onChange={onChange} />
      <RankCardTable
        isSuccess={isSuccess}
        item={"학과"}
        scoreName={"점수"}
        states={inDepartmentState}
        getKey={(state) => state.rankId}
        getPicture={(state) => default_image}
        getScore={(state) => state.rankWeight}
        getText={(state) => state.user.nickname}
      />
      <LoadingSpinner loadingComp={loadingComp} isFetching={isFetching} />
    </>
  );
};

function InDepartmentRankOption({ selectMajor, onChange }) {
  return (
    <div className={"flex py-4 mb-6 overflow-x-auto gap-4 w-full flex-nowrap"}>
      {MAJOR.map((major, index) => {
        return (
          <InDepartmentRankOptionItem
            key={major.value}
            onClick={onChange}
            major={major}
            selectMajor={selectMajor}
          />
        );
      })}
    </div>
  );
}

const InDepartmentRankOptionItem = ({ selectMajor, onClick, major }) => {
  return (
    <button
      name={major.name}
      onClick={onClick}
      className={
        "text-gray-600 text-nowrap px-4 py-3 text-center bg-gray-100 rounded-full hover:bg-primary-100" +
        " " +
        (major.value === selectMajor.value
          ? "bg-primary-600 text-white font-bold"
          : "")
      }
    >
      {major.value}
    </button>
  );
};
export default InDepartment;
