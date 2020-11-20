import { createAction } from "@reduxjs/toolkit";
import { EDIT_INPUT, CLEAR_INPUT } from "../../constant";

export const editInput = createAction(EDIT_INPUT); // input/edit

export const clearInput = createAction(CLEAR_INPUT); // input/clear
