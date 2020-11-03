import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  
  formInitialState={
    title: '',
    author: '',
    priority: 'Low',
    agree: false,
    status:false
  }
  
  state={
    title: '',
    author: '',
    priority: 'Low',
    agree: false,
    status:false
  }
// inputTitleHandler =(e)=>{
// const input = e.target;
// const value = input.value;
// this.setState({
//   title: value
// })
// }
// inputAuthorHandler =({target})=>{
//   const {value} = target
//   this.setState({
//     author: value
//   })
//   }

  inputHandler =({target})=>{
    const {value,name,type,checked} = target;
    this.setState({
      [name]:type==='checkbox' ? checked : value
    })
  }

  submitHeandler =(e)=>{
    const {title,author,priority,status}=this.state
    e.preventDefault();
    const singleTask= {
      title,
      author,
      priority,
      id: Date.now(),
      status
    }
    this.props.addTask(singleTask)
    this.setState({
      ...this.formInitialState
    })

  }

  render() {
    const {title,author,priority,agree}=this.state
    return (
      <form  onSubmit={this.submitHeandler} className="NewTodoForm"autoComplete="off">
        <input
        onChange={this.inputHandler}
          className="NewTodoForm__name"
          type="text"
          name="title"
          placeholder="New Todo"
          value={title}
        />
        <input
        onChange={this.inputHandler}
          className="NewTodoForm__name"
          type="text"
          name="author"
          placeholder="Author"
          value={author}
        />
        <select onChange={this.inputHandler} value={priority} name="priority" className="NewTodoForm__select">
          <option value='' disabled hidden>
            Priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <label htmlFor="agree" className="confirm">
          <input onChange={this.inputHandler} type="checkbox" id="agree" name="agree" checked={agree}/>
          Agree with our policy
        </label>
        <button className="NewTodoForm__submit" type="submit">
          Add Todo
        </button>
      </form>
    );
  }
}

export default Form;