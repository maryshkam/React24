import { ADD_ITEM, DELETE_ITEM } from "../constant";
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
