import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../toolkit/reducer";
import rootReducerWithSlice from "../slice";

const store = configureStore({
  reducer: rootReducerWithSlice,
});

export default store;
