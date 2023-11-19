import Block from "../components/Board/Block/Block.js";
import React from "react";

const initialState = {
    position: 0,
    map: [],
    time: 40,
    update: false,
    score: 1
}

const reactorX_reducer = (state = initialState, action) => {

    const _createStateCopy = () => {

        let stateCopy = {
            position: state.position,
            map: state.map,
            time: state.time,
            update: state.update,
            score: state.score
        }

        return stateCopy;
    }

    let copyState = _createStateCopy();

    switch (action.type) {

        case "newPosition":
            switch (action.score) {
                case 1:
                    copyState.map[copyState.position] = <Block key={copyState.map[copyState.position].key} hero={false} pit={copyState.map[copyState.position].props.pit} />
                    copyState.map[action.position] = <Block key={copyState.map[action.position].key} hero={true} pit={copyState.map[action.position].props.pit} />
                    break;
                case 2:
                    copyState.map[copyState.position] = <Block key={copyState.map[copyState.position].key} hero={false} pit={copyState.map[copyState.position].props.pit} />
                    copyState.map[action.position] = <Block key={copyState.map[action.position].key} hero={false} pit={copyState.map[action.position].props.pit} />
                    break;
                case 3:
                    copyState.map[copyState.position] = <Block key={copyState.map[copyState.position].key} hero={false} pit={copyState.map[copyState.position].props.pit} />
                    break;
                default:
                    break;
            }

            copyState.position = action.position;

            return copyState;

        case "setMap":
            copyState.map = action.map;
            copyState.position = 0;
            return copyState;

        case "newTime":
            copyState.time = action.time;
            return copyState;

        case "updateMap":
            copyState.update = !copyState.update;
            copyState.score = copyState.score + 1;
            return copyState;

        default:
            return copyState;
    }
}

export default reactorX_reducer;