import React, { Component } from 'react';
import "./Todo.css";

class Todo extends Component {
   editItem=()=>{
    this.props.editTask(this.props.index)
  }

   deleteItem=()=>{
    this.props.deleteTask(this.props.id)
  }

  componentWillMount(){
    console.log('componentWillMount');
  }
  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillReceiveProps(){
    console.log('componentWillReceiveProp');
  }

  shouldComponentUpdate(){
    // console.log('shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  
  
  static getDrivedStateFromProps() {
    
  }
  
  
  render()
   {
    const {title,priority,author,status} =this.props;
    return (
      <div className="Todo">
      <div onClick={this.editItem}>
        <p className={`Todo__name ${status && "done"}`}>{title}</p>
        <p className={`Todo__priority ${status && "done"}`}>{priority} priority</p>
        <p className={`Todo__author ${status && "done"} `}>{author}</p>
      </div>
      <span onClick={this.deleteItem} className="Todo__remove" >
       X
      </span>
    </div>
    );
  }
}

export default Todo;

// import React from "react";
// import "./Todo.css";
// const Todo = ({title,priority,author,status,id,index,editTask,deleteTask})=>{
  // const editItem=()=>{
  //   editTask(index)
  // }

  // const deleteItem=()=>{
  //   deleteTask(id)
  // }


//   return (
    // <div className="Todo">
    //   <div onClick={editItem}>
    //     <p className={`Todo__name ${status && "done"}`}>{title}</p>
    //     <p className={`Todo__priority ${status && "done"}`}>{priority} priority</p>
    //     <p className={`Todo__author ${status && "done"} `}>{author}</p>
    //   </div>
    //   <span onClick={deleteItem} className="Todo__remove" >
    //    X
    //   </span>
    // </div>
//   );
// };

// export default Todo;

// ${status && "done"}