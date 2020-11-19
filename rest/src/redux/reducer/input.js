import { CLEAR_INPUT, EDIT_INPUT } from "../constant";
const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_INPUT:
      return action.payload;
    case CLEAR_INPUT:
      return initialState;
    default:
      return state;
  }
};
