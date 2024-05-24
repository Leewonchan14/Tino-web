import React from "react";
import {G_MARKET_FONT} from "../../../constants/FontFamily";

const inputStyle = {
    border: "1px solid #000000",
    width: "100%",
    height: "3.5rem",
    borderRadius: "5px",
    padding: "5px",
    margin: "10px 0",
    fontFamily: G_MARKET_FONT
}

function ComboBox({onChange, value, placeholder, options, className}) {
    return (
        <select style={inputStyle} onChange={onChange} name={"inputUserId"} value={value} className={className}>
            {
                options.map((option, index) => {
                    return <option className={"text-center"} key={index} value={option.value}>{option.name}</option>
                })
            }
        </select>
    );
}

export default ComboBox;