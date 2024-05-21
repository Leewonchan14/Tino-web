import './App.css';
import ScrollToTop from "./hooks/recycle/useScrollToTop";
import AutoLogin from "./pages/AutoLogin";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LayoutWithNavBar from "./layout/LayoutWithNavBar";
import {Home, HOME_PATH} from "./pages/Home";
import {Game, GAME_PATH} from "./pages/Game";
import {Login, LOGIN_PATH} from "./pages/Login";
import {AUTH_EMAIL_PAGE_PATH, AuthEmailCode} from "./pages/AuthEmailCode";
import {SignUp, SIGNUP_PATH} from "./pages/SignUp";
import {Ranking, RANKING_PATH} from "./pages/Ranking";
import {Friend, FRIEND_PAGE_PATH} from "./pages/Friend";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <AutoLogin/>
            <Routes>
                <Route exact path="/" element={<LayoutWithNavBar/>}>
                    <Route exact path={HOME_PATH} element={<Home/>}/>
                    {/*<Route exact path={MY_LOCATION_PATH} element={<MyLocation/>}/>*/}
                    <Route exact path={GAME_PATH} element={<Game/>}/>
                    <Route exact path={LOGIN_PATH} element={<Login/>}/>
                    <Route exact path={AUTH_EMAIL_PAGE_PATH} element={<AuthEmailCode/>}/>
                    <Route exact path={SIGNUP_PATH} element={<SignUp/>}/>
                    <Route exact path={RANKING_PATH} element={<Ranking/>}/>
                    <Route exact path={FRIEND_PAGE_PATH} element={<Friend/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
