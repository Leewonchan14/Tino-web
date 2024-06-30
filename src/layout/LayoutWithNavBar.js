import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/header/NavBar";

function LayoutWithNavBar(props) {
  return (
    <div className={"px-2 py-6 md:px-8 lg:px-40 mobile:px-4"}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default LayoutWithNavBar;
