import Spinner from "../../assets/Spinner.gif";
import React from "react";

const LoadingSpinnerComp = ({loadingComp, isFetching, className}) => {
    return (
        <div ref={loadingComp} className={"flex w-full justify-center " + className}>
            {isFetching && <img src={Spinner} alt=""/>}
        </div>
    )
}

export default LoadingSpinnerComp;