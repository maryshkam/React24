import { EDIT_INPUT, CLEAR_INPUT } from "../constant";

export const editInput = (text) => ({
  type: EDIT_INPUT,
  payload: text,
});

export const clearInput = () => ({
  type: CLEAR_INPUT,
});
