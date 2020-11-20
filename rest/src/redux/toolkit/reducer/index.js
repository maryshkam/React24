import { combineReducers } from "redux";
import inputToolkit from "./inputToolkit";
const rootReducer = combineReducers({
  input: inputToolkit,
});

export default rootReducer;
