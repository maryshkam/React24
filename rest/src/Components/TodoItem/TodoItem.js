import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem,editTask } from "../../redux/action/todoList";
import {deleteTaskOperation,deleteDataFromFireStore} from '../../redux/operations/taskOperations'

const TodoItem = ({ id, text,status }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    
    dispatch(deleteDataFromFireStore("tasks",id))
    dispatch(deleteItem(id));
  };

  const editItem = (id) => {
    dispatch(editTask(id));
  };
  return (
    <li className={status ? "item item__complete" : "item"} >
      {text}
    {/* <p onClick={deleteHandler}>X</p> */}
    <button onClick={deleteHandler}>Delete</button>
    <button onClick={() => editItem(id)}>Complete</button>
    </li>
  );
};

export default TodoItem;
