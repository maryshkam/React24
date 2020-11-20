import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editInput, clearInput } from "../../redux/slice/inputSlice";
import { addItem } from "../../redux/slice/todoListSlice";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const value = useSelector((state) => state.input);
  const tasks = useSelector((state) => state.todo);
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
      id: Date.now(),
    };
    dispatch(addItem(todoItem));
    dispatch(clearInput());

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={inputHandler} value={value} />
        <button>Save</button>
      </form>
      <ul className="list">
        {tasks.map((el) => (
          <TodoItem key={el.id} {...el} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
