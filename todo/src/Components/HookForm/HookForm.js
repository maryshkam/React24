import React, { useState } from "react";
import "./HookForm.css";

const initialState={
    title: '',
    author: '',
    priority: 'Low',
    agree: false,
    status:false
}

// const state = { 
//   ...initialState
// }

const HookForm = ({addTask}) => {
  // const [title,setTitle]=useState('');
  // const [author,setAuthor]=useState('')
  const [{title,author,agree,priority,status},setForm] = useState({...initialState})

  const inputHeandler =({target})=>{
    const {value,name,type,checked} = target;
    setForm(prev=>({...prev,[name]:type==='checkbox' ? checked : value}))
  }

  const submitHeandler =(e)=>{
    e.preventDefault();
    const singleTask= {
      title,
      author,
      priority,
      id: Date.now(),
      status
    }
    addTask(singleTask)
    setForm(initialState)
  }
  
  return (
    <form onSubmit={submitHeandler} className="NewTodoForm" autoComplete="off">
      <input onChange={inputHeandler}
        className="NewTodoForm__name"
        type="text"
        name="title"
        placeholder="New Todo"
        value={title}
      />
      <input onChange={inputHeandler}
        className="NewTodoForm__name"
        type="text"
        name="author"
        placeholder="Author"
        value={author}
      />
      <select onChange={inputHeandler} value={priority} name="priority" className="NewTodoForm__select">
        <option value='' disabled hidden>
          Priority
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <label htmlFor="agree" className="confirm">
        <input onChange={inputHeandler} type="checkbox" id="agree" name="agree" checked={agree}/> Agree with our policy
      </label>
      <button className="NewTodoForm__submit" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default HookForm;