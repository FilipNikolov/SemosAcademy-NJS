import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import combined from './reducers';

const middleware = applyMiddleware(thunk, createLogger()) // fiskalen Aparat

export default createStore(combined, middleware);