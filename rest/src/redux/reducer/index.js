import { combineReducers } from "redux";
import input from "./input";
import todoList from "./todoList";
const rootReducer = combineReducers({
  input,
  todoList,
});

export default rootReducer;
