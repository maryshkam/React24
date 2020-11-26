import React, {useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearInput, editInput } from "../../redux/action/input";
import { addItem } from "../../redux/action/todoList";
import TodoItem from "../TodoItem/TodoItem";
import {getTaskOperation,postTaskOperation,readDataFromFireStore,writeDataToFireStore} from '../../redux/operations/taskOperations';
import { filterType } from "../../redux/action/filterAction";
import "./TodoList.css";
import { userSelector, userName,userCounry,userZipCode } from "../../redux/selectors/userSelector";
import {taskSelector,tasksCountSelctor,uncompletedTaskSelector,countUncompletedTaskSelector,countCompletedTaskSelector,completedTaskSelector} from "../../redux/selectors/taskSelector"

const TodoList = () => {
  const value = useSelector((state) => state.input);
  const tasks = useSelector((state) => state.todoList);
  const taskTotal= useSelector(state=>tasksCountSelctor(state))
  const loader =useSelector((state)=>state.loader);
  const type = useSelector((state) => state.filter);
  const user = useSelector((state)=>userSelector(state));
  const name =useSelector((state)=>userName(state));
  const countryName= useSelector(state=>userCounry(state));
  const code=useSelector(state=>userZipCode(state));
  const uncompletedTaskCount=useSelector((state)=>countUncompletedTaskSelector(state));
  const completedTaskCount=useSelector((state)=>countCompletedTaskSelector(state));
  const completedItems = useSelector(state=>completedTaskSelector(state));
  const uncompletedItems=useSelector(state=>uncompletedTaskSelector(state))
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
      status:false
    };
    dispatch(writeDataToFireStore("tasks",todoItem))
    dispatch(readDataFromFireStore("tasks"))
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
    dispatch(readDataFromFireStore("tasks"))
  },[]);

  const filterTasks = () => {
    switch (type) {
      case "All":
        return tasks;
      case "Completed":
        return completedItems;
      case "Uncompleted":
        return uncompletedItems;
      default:
        return tasks;
    }
  };

  const changeFilterType = (type) => {
    dispatch(filterType(type));
  };

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={inputHandler} value={value} />
        <button>Save</button>
      </form>

  <p>Name: {name}</p>
  <p>Country: {countryName}</p>
  <p>zipIndex: {code}</p>

  <div className="filter">
        <button onClick={() => changeFilterType("All")}>All</button>
        <button onClick={() => changeFilterType("Completed")}>Completed</button>
        <button onClick={() => changeFilterType("Uncompleted")}>
          Uncompleted
        </button>
      </div>

  <p>Total task: {taskTotal}</p>
  <p>Uncompleted tasks: {uncompletedTaskCount}</p>
  <p>Completed tasks: {completedTaskCount}</p>

      {/* {error? <h1>Error</h1> : null} */}
      {loader ? <h1>Loading....</h1>: (<ul className="list">
        {filterTasks().map((el) => (
          <TodoItem key={el.id} {...el} />
        ))}
      </ul>)}
      
    </div>
  );
};

export default TodoList;
