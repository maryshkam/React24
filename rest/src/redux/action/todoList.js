import { ADD_ITEM,EDIT_ITEM, DELETE_ITEM, SET_TASK } from "../constant";

export const addItem = (todoItem) => ({
  type: ADD_ITEM,
  payload: todoItem,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const editTask = (id) => ({
  type: EDIT_ITEM,
  payload: id,
});

export const  setTask = (tasks)=>({
type: SET_TASK,
payload: tasks
})

