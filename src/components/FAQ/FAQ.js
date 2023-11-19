import React from "react";
import FAQ_style from "./FAQ_style.module.scss"

const FAQ = () => {
    return <div className={FAQ_style.FAQ}>
        W A S D = control
        <br />
        <br /> Level 1: full visibility
        <br /> Level 2: 50% chance shadow
        <br /> Level 3: 25% chance shadow
    </div>
}

export default FAQ;