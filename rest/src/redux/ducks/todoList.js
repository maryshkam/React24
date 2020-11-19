// constants
const ADD_ITEM = "todoList/add";
const DELETE_ITEM = "todoList/delete";
// Actions
export const addItem = (todoItem) => ({
  type: ADD_ITEM,
  payload: todoItem,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});
// reducer
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
