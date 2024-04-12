import React from 'react';

function IdPasswordComp({onChange, value, placeholder}) {
    const inputStyle = {
        border: "1px solid #000000",
        width: "100%",
        height: "4rem",
        borderRadius: "5px",
        padding: "5px",
        margin: "10px 0",
        fontFamily: "GmarketSans"
    }
    return (
        <input style={inputStyle} onChange={onChange} name={"inputUserId"} type="text"
               value={value} placeholder={placeholder}/>
    );
}

export default IdPasswordComp;