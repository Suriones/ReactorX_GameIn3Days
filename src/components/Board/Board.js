import React from "react";
import board_style from "./Board_style.module.scss"
import createMap from "../Generation/MapGeneration.js";
import FAQ from "../FAQ/FAQ.js";

const Board = (props) => {

    React.useEffect(() => {
        if (props.state.map[props.state.position] &&
            props.state.map[props.state.position].props.pit) {
            location.reload();
        }

        if (props.state.score > 3) { alert("YOU WON!"); location.reload(); }

        props.state.position === props.state.map.length - 1 ?
            props.dispatch({ type: "updateMap" }) :
            window.addEventListener("keypress", control);

    }, [props.state.position]);

    React.useEffect(() => {
        props.dispatch({ type: "setMap", map: createMap(props.state.score) });
    }, [props.state.update]);

    const removeEventListener = () => { window.removeEventListener("keypress", control); }

    const control = (button) => {
        switch (button.code) {
            case "KeyD":
                if (props.state.position + 1 < 864 && props.state.position % 36 !== 35) {
                    props.dispatch({ type: "newPosition", position: props.state.position + 1, score: props.state.score });
                    removeEventListener();
                }
                break;

            case "KeyA":
                if (props.state.position - 1 >= 0 && props.state.position % 36 !== 0) {
                    props.dispatch({ type: "newPosition", position: props.state.position - 1, score: props.state.score });
                    removeEventListener();
                }
                break;

            case "KeyS":
                if (props.state.position + 36 < 864) {
                    props.dispatch({ type: "newPosition", position: props.state.position + 36, score: props.state.score });
                    removeEventListener();
                }
                break;

            case "KeyW":
                if (props.state.position - 36 >= 0) {
                    props.dispatch({ type: "newPosition", position: props.state.position - 36, score: props.state.score });
                    removeEventListener();
                }
                break;

            default:
                break;
        }
    }

    return <div>
        <div className={board_style.board}>{props.state.map}</div>
        <div className={board_style.score}>{props.state.score} level</div>
        <FAQ />
    </div >;
}

export default Board;