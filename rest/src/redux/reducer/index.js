import { combineReducers } from "redux";
import input from "./input";
import todoList from "./todoList";
import loader from './loaderReducer';
import error from './errorReducer';
import user from './userReducer';
import filter from './filterReducer'
const rootReducer = combineReducers({
  input,
  todoList,
  loader,
  error,
  user,
  filter
});

export default rootReducer;
