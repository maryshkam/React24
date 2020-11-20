import { combineReducers } from "redux";
import inputToolkit from "./inputToolkit";
import todoListToolkit from "./todoListToolkit";
const rootReducer = combineReducers({
  input: inputToolkit,
  todo: todoListToolkit,
});

export default rootReducer;
