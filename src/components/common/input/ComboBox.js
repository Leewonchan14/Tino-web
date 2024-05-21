import React from "react";
import {G_MARKET_FONT} from "../../../constant/FontFamily";

const inputStyle = {
    border: "1px solid #000000",
    width: "100%",
    height: "3.5rem",
    borderRadius: "5px",
    padding: "5px",
    margin: "10px 0",
    fontFamily: G_MARKET_FONT
}

function ComboBox({onChange, value, placeholder, options}) {
    return (
        <select style={inputStyle} onChange={onChange} name={"inputUserId"} value={value}>
            {
                options.map(({value}, index) => {
                    return <option key={index} value={value}>{value}</option>
                })
            }
        </select>
    );
}

export default ComboBox;