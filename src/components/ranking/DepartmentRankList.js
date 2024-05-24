import RankHeader from "./RankHeader";
import RankCard from "./RankCard";
import React, {useRef} from "react";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import useGetDepartmentRankQuery from "../../hooks/queries/rank/useGetDepartmentRankQuery";
import {MAJOR} from "../../constants/Major";

const DepartmentRankList = () => {

    const loadingComp = useRef(null);

    let {isSuccess, departmentState, isFetching}
        = useGetDepartmentRankQuery();

    return (
        <section className={"w-full"}>
            <RankHeader score={"점수"} item={"학과"}/>
            {isSuccess && departmentState.map((departmentRank, _) => (
                <RankCard
                    key={departmentRank.major} rank={departmentRank.totalRank}
                    score={departmentRank.rankWeight} text={departmentRank.major}
                    picture={MAJOR.find(major => major.name === departmentRank.major).url}/>)
            )}

            <LoadingSpinner loadingComp={loadingComp} isFetching={isFetching}/>
        </section>
    )
}

export default DepartmentRankList;