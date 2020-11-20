import { createReducer } from "@reduxjs/toolkit";
import { EDIT_INPUT, CLEAR_INPUT } from "../../constant";
const initialState = "";

export default createReducer(initialState, {
  [EDIT_INPUT]: (state, action) => action.payload,
  [CLEAR_INPUT]: (state, action) => initialState,
});
