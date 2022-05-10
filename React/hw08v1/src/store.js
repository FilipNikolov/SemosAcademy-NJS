import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import combined from "./reducers/index";

const middleware = applyMiddleware(thunk, createLogger())

export default createStore(combined, middleware);