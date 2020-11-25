import React, {useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearInput, editInput } from "../../redux/action/input";
import { addItem } from "../../redux/action/todoList";
import TodoItem from "../TodoItem/TodoItem";
import {getTaskOperation,postTaskOperation} from '../../redux/operations/taskOperations'
import "./TodoList.css";

const TodoList = () => {
  const value = useSelector((state) => state.input);
  const tasks = useSelector((state) => state.todoList);
  const loader =useSelector((state)=>state.loader)
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const text = e.target.value;
    dispatch(editInput(text));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    const todoItem = {
      text: value,
      // id: Date.now(),
    };
    dispatch(postTaskOperation(todoItem))
    dispatch(getTaskOperation())
    // dispatch(addItem(todoItem));
    // dispatch(clearInput());

    // if (value === "") {
    //   return;
    // }

    // if (value) {
    //   const todoItem = {
    //     text: value,
    //     id: Date.now(),
    //   };
    //   dispatch(addItem(todoItem));
    //   dispatch(clearInput());
    // }
  };

  useEffect(()=>{
    dispatch(getTaskOperation())
  },[])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={inputHandler} value={value} />
        <button>Save</button>
      </form>
      {/* {error? <h1>Error</h1> : null} */}
      {loader ? <h1>Loading....</h1>: (<ul className="list">
        {tasks.map((el) => (
          <TodoItem key={el.id} {...el} />
        ))}
      </ul>)}
      
    </div>
  );
};

export default TodoList;
