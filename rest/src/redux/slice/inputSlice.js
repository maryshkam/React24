import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    editInput(state, action) {
      return action.payload;
    },
    clearInput(state, action) {
      return "";
    },
  },
});

const { actions, reducer } = inputSlice;
export const { editInput, clearInput } = actions;

export default reducer;
