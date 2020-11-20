import { createReducer } from "@reduxjs/toolkit";
import { ADD_ITEM, DELETE_ITEM } from "../../constant";
const initialState = [];

export default createReducer(initialState, {
  [ADD_ITEM]: (state, action) => [...state, action.payload],
  [DELETE_ITEM]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});
