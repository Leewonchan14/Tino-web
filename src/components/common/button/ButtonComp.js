import React from 'react';
import {G_MARKET_FONT} from "../../../constants/FontFamily";

function ButtonComp({text, onClick, className}) {
    const inputStyle = {
        border: "1px solid #000000",
        width: "100%",
        height: "3.5rem",
        borderRadius: "5px",
        padding: "5px",
        margin: "10px 0",
        fontFamily: G_MARKET_FONT
    }
    return (
        <button style={inputStyle}
                className={"bg-blue-600 text-white font-bold text-xl "
                    + className
                }
                onClick={onClick}>{text}</button>
    )
        ;
}

export default ButtonComp;