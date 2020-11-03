import React from "react";
import "./Todo.css";
const Todo = ({title,priority,author,status,id,index,editTask,deleteTask})=>{
  const editItem=()=>{
    editTask(index)
  }

  const deleteItem=()=>{
    deleteTask(id)
  }


  return (
    <div className="Todo">
      <div onClick={editItem}>
        <p className={`Todo__name ${status && "done"}`}>{title}</p>
        <p className={`Todo__priority ${status && "done"}`}>{priority} priority</p>
        <p className={`Todo__author ${status && "done"} `}>{author}</p>
      </div>
      <span onClick={deleteItem} className="Todo__remove" >
       X
      </span>
    </div>
  );
};

export default Todo;

// ${status && "done"}