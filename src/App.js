import "./App.css";
import ScrollToTop from "./hooks/recycle/useScrollToTop";
import AutoLogin from "./pages/AutoLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutWithNavBar from "./layout/LayoutWithNavBar";
import { HOME_PATH, HomePage } from "./pages/HomePage";
import { GAME_PATH, GameDetailPage } from "./pages/GameDetailPage";
import { LOGIN_PATH, LoginPage } from "./pages/LoginPage";
import {
  AUTH_EMAIL_PAGE_PATH,
  AuthEmailCodePage,
} from "./pages/AuthEmailCodePage";
import { SIGNUP_PATH, SignUpPage } from "./pages/SignUpPage";
import { RANKING_PATH, RankingPage } from "./pages/RankingPage";
import { Friend, FRIEND_PAGE_PATH } from "./pages/Friend";
import React from "react";
import { MY_PAGE_PATH, MyPage } from "./pages/MyPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AutoLogin />
      <Routes>
        <Route exact element={<LayoutWithNavBar />}>
          <Route exact path={HOME_PATH} element={<HomePage />} />
          <Route exact path={GAME_PATH} element={<GameDetailPage />} />
          <Route exact path={LOGIN_PATH} element={<LoginPage />} />
          <Route
            exact
            path={AUTH_EMAIL_PAGE_PATH}
            element={<AuthEmailCodePage />}
          />
          <Route exact path={SIGNUP_PATH} element={<SignUpPage />} />
          <Route exact path={RANKING_PATH} element={<RankingPage />} />
          <Route exact path={FRIEND_PAGE_PATH} element={<Friend />} />
          <Route path={MY_PAGE_PATH} element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
