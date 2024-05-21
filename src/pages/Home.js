import React from 'react';
import Footer from "../components/footer/Footer";
import {G_MARKET_FONT} from "../constant/FontFamily";
import GameCompList from "../components/game/list/GameListComp";

const HOME_PATH = "/";

function Home(props) {
    return (
        <>
            <h1 className={"text-6xl mt-28 font-bold"} style={{fontFamily: G_MARKET_FONT}}>티노 게임즈</h1>
            <h1 className={"mt-6 mb-12"}>한국공학대학교 게임 설명입니다. 이것은 한국공학대학교 게임 설명입니다.<br/>
                이 문구는 웹사이트 dinogmaes-bugo.s3 한국공학대학교 입니다.
            </h1>
            <GameCompList/>
            <Footer/>
        </>
    );
}

export {Home, HOME_PATH};