import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import combined from "./reducers";

const applyMiddleware = applyMiddleware(thunk, createLoggers());

export default createStore(combined, middleware)