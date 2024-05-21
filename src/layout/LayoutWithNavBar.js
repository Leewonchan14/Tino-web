import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../components/header/NavBar";

function LayoutWithNavBar(props) {
    return (
        <div className={"h-full px-64 py-6"}>
            <NavBar/>
            <Outlet/>
        </div>
    );
}

export default LayoutWithNavBar;