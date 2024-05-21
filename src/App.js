import './App.css';
import ScrollToTop from "./hooks/recycle/useScrollToTop";
import AutoLogin from "./pages/AutoLogin";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LayoutWithNavBar from "./layout/LayoutWithNavBar";
import {Home, HOME_PATH} from "./pages/Home";
import MyLocation, {MY_LOCATION_PATH} from "./pages/MyLocation";
import {GAME_PATH, GameDetailPage} from "./pages/GameDetailPage";
import {Login, LOGIN_PATH} from "./pages/Login";
import {EMAIL_PAGE_PATH, EmailCode} from "./pages/EmailCode";
import {SignUp, SIGNUP_PATH} from "./pages/SignUp";
import {Ranking, RANKING_PATH} from "./pages/Ranking";
import {FRIEND_PAGE_PATH, FriendPage} from "./pages/FriendPage";
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
                    <Route exact path={GAME_PATH} element={<GameDetailPage/>}/>
                    <Route exact path={LOGIN_PATH} element={<Login/>}/>
                    <Route exact path={EMAIL_PAGE_PATH} element={<EmailCode/>}/>
                    <Route exact path={SIGNUP_PATH} element={<SignUp/>}/>
                    <Route exact path={RANKING_PATH} element={<Ranking/>}/>
                    <Route exact path={FRIEND_PAGE_PATH} element={<FriendPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
