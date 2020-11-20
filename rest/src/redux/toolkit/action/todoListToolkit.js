import { createAction } from "@reduxjs/toolkit";
import { ADD_ITEM, DELETE_ITEM } from "../../constant";

export const addItem = createAction(ADD_ITEM);
export const deleteItem = createAction(DELETE_ITEM);
