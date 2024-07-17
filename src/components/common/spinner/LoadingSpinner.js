import React from "react";

const LoadingSpinner = ({ loadingComp, className }) => {
  return (
    <div
      ref={loadingComp}
      className={"flex w-full justify-center " + className}
    >
      {/*<Spin size={"large"} spinning={isFetching} />*/}
    </div>
  );
};

export default LoadingSpinner;
