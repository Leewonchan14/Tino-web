import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/header/NavBar";

function NavBarLayout(props) {
  return (
    <>
      <div className={"px-2 py-6 mx-auto pc:max-w-home-max-width"}>
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}

export default NavBarLayout;
