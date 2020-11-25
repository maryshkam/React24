import { ADD_ITEM, DELETE_ITEM,SET_TASK } from "../constant";
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    case SET_TASK:
      return action.payload
    default:
      return state;
  }
};
