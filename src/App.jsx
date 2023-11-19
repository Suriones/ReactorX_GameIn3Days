import React from "react";
import Board from "./components/Board/board.js";
import Timer from "./components/Timer/Timer.js";

const App = (props) => {

    return <div>
        <Board state={props.state.reactorX_reducer} dispatch={props.dispatch} />
        <Timer time={props.state.reactorX_reducer.time} dispatch={props.dispatch} />
    </div>
}

export default App;