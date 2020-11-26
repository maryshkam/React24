import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools,devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./reducer";
import logger from 'redux-logger';
import {ownLogger} from './logger';
import thunk from 'redux-thunk';

const middleWares=[thunk];

const rootMiddleWares=applyMiddleware(...middleWares);
const compose = composeWithDevTools(rootMiddleWares)

const store = createStore(rootReducer, compose);
// const store = createStore(rootReducer, composeWithDevTools(rootMiddleWares));

export default store;
