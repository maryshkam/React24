import React,{useState} from 'react';
import HookForm from '../HookForm/HookForm';
import Todo from '../Todo/Todo';
import './TodoListHook.css'

const TodoListHook = () => {
  
  const [tasks,setTasks]=useState([]);
  const [type,setType]=useState('all');

  const changeFilter =({target})=>{
    const filterType=target.dataset.filter;
    setType(filterType);
  }

  const filterTask =()=>{
    switch(type){
      case 'all':
        return tasks;
      case 'completed':
        return  tasks.filter(el=>el.status===true);
      case 'uncompleted':
        return   tasks.filter(el=>el.status===false);
      default:
        return tasks;
    }
  }

  const addTask=(objTask)=>{
      setTasks(prev=>[...prev,objTask])
  }

  const deleteTask=(id)=>{
    setTasks(prev=>prev.filter(task=> task.id!==id))
  }

  const editTask=(index)=>{
    const newTaskArr=[...tasks];
    const task =newTaskArr[index];
    task.status=true;
    newTaskArr[index]=task;
    setTasks(newTaskArr)
  }

  return (
    <div className="TodoList">
    <h1 className="TodoList__title">Todo List</h1>
    {/* <Form /> */}
    <HookForm addTask={addTask}/>
    <ul className="TodoList__todos">
      {filterTask().map((todo, index) => (
        <li key={todo.id}>
          <Todo {...todo} index={index} editTask={editTask} deleteTask={deleteTask}/>
        </li>
      ))}
    </ul>
    <div className="filters">
      <button onClick={changeFilter} className="NewTodoForm__submit" data-filter="all">
        All
      </button>
      <button onClick={changeFilter} className="NewTodoForm__submit" data-filter="completed">
        Completed
      </button>
      <button onClick={changeFilter} className="NewTodoForm__submit" data-filter="uncompleted">
        Uncompleted
      </button>
    </div>
  </div>
  );
};

export default TodoListHook;