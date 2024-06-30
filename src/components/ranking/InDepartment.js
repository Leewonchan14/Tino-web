import React, { useState } from "react";
import { MAJOR } from "../../constants/Major";
import { RankCardTable } from "./RankCardTable";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import default_image from "../../assets/default_image.jpg";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import { useGetInDepartmentRankQuery } from "../../hooks/queries/rank/useGetInDepartmentRankQuery";

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
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (name) => {
    setIsOpen(false);
    onChange(name);
  };

  return (
    <>
      <div
        className={
          "overflow-clip flex py-4 mb-6 gap-4 w-full flex-wrap h-auto transition-all duration-1000" +
          " " +
          "mobile:relative mobile:block mobile:overflow-hidden mobile:p-0 mobile:m-0" +
          " " +
          (isOpen ? "mobile:max-h-[1400px]" : "mobile:max-h-0")
        }
      >
        {MAJOR.map((major, index) => {
          return (
            <InDepartmentRankOptionItem
              key={major.value}
              onClick={onClick}
              major={major}
              selectMajor={selectMajor}
            />
          );
        })}
      </div>
      <button
        className={
          "hidden my-6 bottom-10 w-full bg-primary-600 text-white font-bold rounded-xl py-2 text-xl" +
          " " +
          "mobile:block"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "닫기" : selectMajor.value}
      </button>
    </>
  );
}

const InDepartmentRankOptionItem = ({ selectMajor, onClick, major }) => {
  return (
    <button
      name={major.name}
      onClick={() => onClick(major.name)}
      className={
        "flex items-center text-gray-600 text-nowrap px-2 py-1 text-center bg-gray-100 rounded-full hover:bg-primary-100" +
        "mobile:hover:bg-transparent mobile:hover:text-primary-600 mobile:bg-transparent mobile:w-full" +
        " " +
        (major.value === selectMajor.value
          ? "bg-primary-600 text-white font-bold mobile:text-primary-600 mobile:border-primary-600"
          : "")
      }
    >
      <div
        className={
          "w-12 h-12 mr-1 overflow-clip rounded-full border-[1px] border-black"
        }
      >
        <img className={"h-12 object-cover"} src={major.url} alt="" />
      </div>
      {major.value}
    </button>
  );
};
export default InDepartment;
