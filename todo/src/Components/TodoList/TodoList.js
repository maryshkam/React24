import React, { useState, Component } from "react";
import Form from "../Form/Form";
import Todo from "../Todo/Todo";
import "./TodoList.css";
import HookForm from "../HookForm/HookForm";


class TodoList extends Component {
  state ={
    tasks: [],
    type: 'all'
  }

  changeFilter = ({target})=>{
  const type = target.dataset.filter;
  this.setState({type:type})
  }

  filterTask=()=>{
    const {tasks,type}=this.state;
    switch(type) {
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

  addTask=(objTask)=>{
    this.setState(prev=>({
      tasks: [...prev.tasks,objTask]
    }))

  }

  editTask=(index)=>{
    // console.log(index);
    const newTasksArr =[...this.state.tasks];
    const task = newTasksArr[index];
    task.status = true;
    newTasksArr[index]= task;
    this.setState({
      tasks: newTasksArr,
    })
  }

  deleteTask=(id)=>{
    this.setState((prev)=>({
      tasks: prev.tasks.filter((el)=> el.id!== id)
    }))
  }


  render(){
    const {tasks}= this.state
    return(
      <div className="TodoList">
      <h1 className="TodoList__title">Todo List</h1>
      {/* <Form addTask={this.addTask}/> */}
      <HookForm addTask={this.addTask}/>
      <ul className="TodoList__todos">
        {this.filterTask().map((todo, index) => (
          <li key={todo.id}>
            <Todo {...todo} index={index} editTask={this.editTask} deleteTask={this.deleteTask}/>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button onClick={this.changeFilter} className="NewTodoForm__submit" data-filter="all">
          All
        </button>
        <button onClick={this.changeFilter} className="NewTodoForm__submit" data-filter="completed">
          Completed
        </button>
        <button onClick={this.changeFilter} className="NewTodoForm__submit" data-filter="uncompleted">
          Uncompleted
        </button>
      </div>
    </div>
    )
  }
}


// const TodoList = () => {
// return (
  // <div className="TodoList">
  //   <h1 className="TodoList__title">Todo List</h1>
  //   <Form />
  //   {/* <HookForm /> */}
  //   <ul className="TodoList__todos">
  //     {[].map((todo, index) => (
  //       <li key={todo.id}>
  //         <Todo />
  //       </li>
  //     ))}
  //   </ul>
  //   <div className="filters">
  //     <button className="NewTodoForm__submit" data-filter="all">
  //       All
  //     </button>
  //     <button className="NewTodoForm__submit" data-filter="completed">
  //       Completed
  //     </button>
  //     <button className="NewTodoForm__submit" data-filter="uncompleted">
  //       Uncompleted
  //     </button>
  //   </div>
  // </div>
// );
// };

export default TodoList;