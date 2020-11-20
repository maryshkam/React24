import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/slice/todoListSlice";

const TodoItem = ({ id, text }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteItem(id));
  };
  return (
    <li className="item" onClick={deleteHandler}>
      {text}
    </li>
  );
};

export default TodoItem;
