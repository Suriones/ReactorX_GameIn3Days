import React from "react";
import timer_style from "./Timer_style.module.scss";

const Timer = (props) => {

    React.useEffect(() => {
        setTimeout(() => props.dispatch({ type: "newTime", time: props.time - 1 }), 1000);
        if (props.time === 0) {location.reload()}
    }, [props.time]);

    return (<div className={timer_style.timer}><h1>{props.time} s.</h1></div>)
}

export default Timer;