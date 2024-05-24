import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../components/header/NavBar";

function LayoutWithNavBar(props) {
    return (
        <div className={"h-full px-2 py-6 md:px-8 lg:px-40 xl:px-64"}>
            <NavBar/>
            <Outlet/>
        </div>
    );
}

export default LayoutWithNavBar;