import {combineReducers} from 'redux';
import count from './countReducer';

const rootReducer=combineReducers({
counter: count,
});

export default rootReducer;