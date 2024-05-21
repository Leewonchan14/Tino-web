import Spinner from "../assets/Spinner.gif";
import React from "react";

const LoadingComp = ({loadingComp, isFetching}) => {
    return (
        <div ref={loadingComp} className={"flex w-full justify-center"}>
            {isFetching && <img src={Spinner} alt=""/>}
        </div>
    )
}

export default LoadingComp;