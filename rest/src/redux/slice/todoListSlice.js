import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addItem(state, action) {
      return [...state, action.payload];
    },
    deleteItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

const { actions, reducer } = todoSlice;

export const { addItem, deleteItem } = actions;
export default reducer;
