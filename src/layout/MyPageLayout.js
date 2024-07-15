import { Outlet } from "react-router-dom";

export const MyPageLayout = ({ children }) => {
  return (
    <div
      id={"MyPageLayout"}
      className={"h-full mx-auto max-w-my-page-max-width"}
    >
      <Outlet />
    </div>
  );
};
