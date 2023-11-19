import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import reactorX_reducer from "./reactorX_reducer";

let reducers = combineReducers({
    reactorX_reducer: reactorX_reducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;