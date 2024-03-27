import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function LayoutWithNavBar(props) {
    return (
        <div className={"px-64 py-6"}>
            <NavBar/>
            <Outlet/>
            <div className={"border-2 mt-24"}></div>
            <Footer/>
        </div>
    );
}

export default LayoutWithNavBar;