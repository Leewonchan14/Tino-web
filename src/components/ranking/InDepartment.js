import React, { useState } from "react";
import { MAJOR } from "../../constants/Major";
import { RankCardTable } from "./RankCardTable";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import default_image from "../../assets/default_image.jpg";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import { useGetInDepartmentRankQuery } from "../../hooks/queries/rank/useGetInDepartmentRankQuery";
import { AccordionWrapper } from "../common/wrapper/AccordionWrapper";

const InDepartment = () => {
  const {
    inDepartmentState,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isSuccess,
    selectMajor,
    onChange,
  } = useGetInDepartmentRankQuery();

  let { loadingComp } = useReactQueryInfiniteScroll({
    fetchData: fetchNextPage,
    isFetching,
    hasNextPage,
  });

  return (
    <>
      <InDepartmentRankOption
        selectMajor={selectMajor}
        onChange={onChange}
      />
      <RankCardTable
        {...{ isSuccess, isFetching }}
        item={"학과"}
        scoreName={"점수"}
        states={inDepartmentState}
        getKey={(state) => state.rankId}
        getPicture={(state) => default_image}
        getScore={(state) => state.rankWeight}
        getText={(state) => state.user.nickname}
      />
      <LoadingSpinner
        loadingComp={loadingComp}
        isFetching={isFetching}
      />
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
      <AccordionWrapper
        isOpen={
          document.querySelector("#root").scrollWidth >= 640 || isOpen
        }
      >
        <div
          className={
            "whitespace-pre gap-4 overflow-x-auto py-4 mb-6" +
            " " +
            "mobile:relative mobile:p-0 mobile:m-0 mobile:flex mobile:flex-col"
          }
        >
          {MAJOR.map((major, index) => (
            <InDepartmentRankOptionItem
              key={major.value}
              {...{ onClick, major, selectMajor, index }}
            />
          ))}
        </div>
      </AccordionWrapper>
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

const InDepartmentRankOptionItem = ({
  selectMajor,
  index,
  onClick,
  major,
}) => {
  return (
    <>
      <button
        name={major.name}
        onClick={() => onClick(major.name)}
        className={
          "mr-4 inline-flex items-center text-gray-600 px-2 py-1 text-center bg-gray-100 rounded-full hover:bg-primary-100" +
          " " +
          "mobile:hover:bg-transparent mobile:hover:text-primary-600 mobile:bg-transparent mobile:w-full" +
          " " +
          (major.value === selectMajor.value
            ? "bg-primary-600 text-white font-bold mobile:text-primary-600 mobile:border-primary-600"
            : "")
        }
      >
        <img
          className={
            "w-9 h-9 mr-1 overflow-clip rounded-full border-[1px] border-gray-400 object-cover"
          }
          src={major.url}
          alt=""
        />
        <p className={"whitespace-nowrap"}> {major.value}</p>
      </button>
      {Math.floor(MAJOR.length / 2) === index && (
        <>
          <br />
          <br />
        </>
      )}
    </>
  );
};
export default InDepartment;
