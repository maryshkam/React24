import {ADDITEM, DELETE_ITEM, EDIT_ITEM,SET_TASK} from '../constants/tasksConstants';
import {createAction} from '@reduxjs/toolkit';

export const addTask= createAction(ADDITEM);
export const deleteTask = createAction(DELETE_ITEM);
export const editTask = createAction(EDIT_ITEM);
export const setTask = createAction(SET_TASK);



// export const addTask = (task)=> ({
//   type: ADDITEM,
//   payload: task,
// })

// export const deleteTask = (id) =>({
//   type: DELETE_ITEM,
//   payload: id,
// })

// export const editTask = (id) =>({
//   type: EDIT_ITEM,
//   payload: id,
// })