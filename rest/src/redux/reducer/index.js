import { combineReducers } from "redux";
import input from "./input";
import todoList from "./todoList";
import loader from './loaderReducer';
import error from './errorReducer'
const rootReducer = combineReducers({
  input,
  todoList,
  loader,
  error
});

export default rootReducer;
