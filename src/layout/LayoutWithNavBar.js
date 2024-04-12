import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function LayoutWithNavBar(props) {
    return (
        <div className={"h-full px-64 py-6"}>
            <NavBar/>
            <Outlet/>
        </div>
    );
}

export default LayoutWithNavBar;