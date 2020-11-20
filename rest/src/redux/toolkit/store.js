import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../toolkit/reducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
