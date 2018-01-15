import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from "redux-observable";
import logger from 'redux-logger'
import { app as appEpic } from './epics';
import * as reducers from './reducers';

const rootEpic = combineEpics(
    ...Object.values(appEpic).filter(a => typeof a === 'function')
);

const rootReducer = combineReducers(reducers);

const epicMiddleware = createEpicMiddleware(rootEpic);

export default createStore(rootReducer, applyMiddleware(epicMiddleware, logger))