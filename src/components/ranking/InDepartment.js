import React, { useRef, useState } from "react";
import { MAJOR } from "../../constants/Major";
import { RankCardTable } from "./RankCardTable";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import default_image from "../../assets/default_image.jpg";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import { useGetInDepartmentRankQuery } from "../../hooks/queries/rank/useGetInDepartmentRankQuery";
import { AccordionWrapper } from "../common/wrapper/AccordionWrapper";
import useCrossHorizonScroll from "../../hooks/recycle/useCrossHorizonScroll";
import Scrollbars from "react-custom-scrollbars-2";

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
  const scrollRef = useRef(null);
  useCrossHorizonScroll(scrollRef.current?.container.children[0]);

  const [isOpen, setIsOpen] = useState(false);

  const onClick = (name) => {
    setIsOpen(false);
    onChange(name);
  };

  return (
    <>
      <Scrollbars
        ref={scrollRef}
        universal
        autoHeight
        className={"mobile:hidden mb-4"}
      >
        <div className={"whitespace-pre py-4 mb-4"}>
          {MAJOR.map((major, index) => (
            <InDepartmentRankOptionItem
              key={major.value}
              {...{ onClick, major, selectMajor, index }}
            />
          ))}
        </div>
      </Scrollbars>
      <AccordionWrapper
        isOpen={isOpen}
        className={"hidden mobile:block"}
      >
        <div
          className={
            "whitespace-pre flex flex-col relative w-full py-4 mb-6 "
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
            ? "!bg-primary-600 mobile:!bg-transparent text-white font-bold mobile:text-primary-600 mobile:border-primary-600"
            : "")
        }
      >
        <img
          className={
            "w-9 h-9 mr-1 overflow-clip rounded-full border-[1px] border-gray-300 object-cover"
          }
          src={major.url}
          alt=""
        />
        <p className={"whitespace-nowrap"}> {major.value}</p>
      </button>
      {Math.floor(MAJOR.length / 2) === index && (
        <span className={"mobile:hidden"}>
          <br />
          <br />
        </span>
      )}
    </>
  );
};
export default InDepartment;
