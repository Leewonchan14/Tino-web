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
import {Ranking} from "./pages/Ranking";
import {Friend, FRIEND_PAGE_PATH} from "./pages/Friend";
import React from "react";
import GameRank, {GAME_RANK_PATH} from "./pages/Rank/GameRank";
import UserRank, {USER_RANK_PATH} from "./pages/Rank/UserRank";
import Departments, {DEPARTMENTS_PATH} from "./pages/Rank/Departments";
import InDepartment, {IN_DEPARTMENT_PATH} from "./pages/Rank/InDepartment";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <AutoLogin/>
            <Routes>
                <Route exact element={<LayoutWithNavBar/>}>
                    <Route exact path={HOME_PATH} element={<Home/>}/>
                    <Route exact path={GAME_PATH} element={<Game/>}/>
                    <Route exact path={LOGIN_PATH} element={<Login/>}/>
                    <Route exact path={AUTH_EMAIL_PAGE_PATH} element={<AuthEmailCode/>}/>
                    <Route exact path={SIGNUP_PATH} element={<SignUp/>}/>
                    <Route exact element={<Ranking/>}>
                        <Route exact path={GAME_RANK_PATH} element={<GameRank/>}/>
                        <Route exact path={USER_RANK_PATH} element={<UserRank/>}/>
                        <Route exact path={DEPARTMENTS_PATH} element={<Departments/>}/>
                        <Route exact path={IN_DEPARTMENT_PATH} element={<InDepartment/>}/>
                    </Route>
                    <Route exact path={FRIEND_PAGE_PATH} element={<Friend/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
