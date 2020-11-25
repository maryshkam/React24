import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/action/todoList";
import {deleteTaskOperation} from '../../redux/operations/taskOperations'

const TodoItem = ({ id, text }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    
    dispatch(deleteTaskOperation(id))
    dispatch(deleteItem(id));
  };
  return (
    <li className="item" onClick={deleteHandler}>
      {text}
    </li>
  );
};

export default TodoItem;
