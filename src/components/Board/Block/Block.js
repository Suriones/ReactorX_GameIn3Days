import React from "react";
import block_style from "./Block_style.module.scss"

const Block = (props) => {

    const rotate = Math.random() > 0.5 ? "90deg" : "0deg";

    const hero = <div className={block_style.block} style={{ background: "green" }}></div>;
    const road = <div className={block_style.block}><img className={block_style.road} style={{ width: "25px", height: "25px", rotate: rotate, boxShadow: "1px 5px 10px black", background: "#696969" }} src="http://localhost:8080/c78668ca1d201b047dad.jpg"></img></div>;
    const pit = <div className={block_style.block}><img className={block_style.pit} style={{ width: "25px", height: "25px", rotate: rotate }} src="http://localhost:8080/d27e4e030b2f9b5c6b32.jpg"></img></div>;

    if (props.hero) { return hero; }
    if (props.pit) { return pit; }

    return road;
}

export default Block;