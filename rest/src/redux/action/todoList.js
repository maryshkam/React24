import { ADD_ITEM, DELETE_ITEM } from "../constant";

export const addItem = (todoItem) => ({
  type: ADD_ITEM,
  payload: todoItem,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});
