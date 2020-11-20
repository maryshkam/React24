import { combineReducers } from "redux";
import todoListSlice from "./todoListSlice";
import inputSlice from "./inputSlice";

const rootReducerWithSlice = combineReducers({
  todo: todoListSlice,
  input: inputSlice,
});

export default rootReducerWithSlice;
