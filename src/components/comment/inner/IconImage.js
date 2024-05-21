import React from "react";

function IconImage({src}) {
    return (
        <section className={"block rounded-full bg-gray-400 mr-4"}>
            <img className={"h-14"} src={src} alt=""/>
        </section>
    )
}

export default IconImage;