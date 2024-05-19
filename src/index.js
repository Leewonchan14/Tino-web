import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LayoutWithNavBar from "./layout/LayoutWithNavBar";
import {Home, HOME_PATH} from "./pages/Home";
import {GAME_PATH, GameDetailPage} from "./pages/GameDetailPage";
import {Login, LOGIN_PATH} from "./pages/Login";
import {SignUp, SIGNUP_PATH} from "./pages/SignUp";
import {EmailCode, EMAIL_PAGE_PATH} from "./pages/EmailCode";
import {Ranking, RANKING_PATH} from "./pages/Ranking";
import {FRIEND_PAGE_PATH, FriendPage} from "./pages/FriendPage";
import ScrollToTop from "./hooks/useScrollToTop";
import MyLocation, {MY_LOCATION_PATH} from "./pages/MyLocation";
import AutoLogin from "./pages/AutoLogin";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ScrollToTop/>
        <AutoLogin/>
        <Routes>
            <Route exact path="/" element={<LayoutWithNavBar/>}>
                <Route exact path={HOME_PATH} element={<Home/>}/>
                <Route exact path={MY_LOCATION_PATH} element={<MyLocation/>}/>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
