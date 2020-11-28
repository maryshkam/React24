import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools,devToolsEnhancer } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from "./reducer";
import logger from 'redux-logger';
import {ownLogger} from './logger';
import thunk from 'redux-thunk';

const middleWares=[thunk];

const rootMiddleWares=applyMiddleware(...middleWares);
const compose = composeWithDevTools(rootMiddleWares)

const persistConfig={
  key:'test',
  storage,
  whitelist: ["token"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store =createStore(persistedReducer,compose);
export const persistor = persistStore(store)

// const store = createStore(rootReducer, compose);
// const store = createStore(rootReducer, composeWithDevTools(rootMiddleWares));

export default store;
