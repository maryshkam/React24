import React, { Component} from "react";
import PropTypes  from "prop-types";
import classes from "./Counter.module.css";

class Counter extends Component {
  // constructor(){
  //   super()  
    
  //   this.state={
  //     count:10
  //   }
  //   this.plus=this.plus.bind(this)
      
  // }
  state = {
    count: 0,
    age: 25,
    gender: 'male',
  }

  plus = async () => {
    // console.log('helo');
    // this.state.count=20;
  await this.setState((prevState)=>({
    count: prevState.count+1
  }));
  console.log(this.state);
    // this.setState({count: 15})
  }

  reset =()=>{
    this.setState({count:0})
    // this.setState(()=>({}))
  }

  minus = () => {
    this.setState((prevState)=>({
      count: prevState.count-1
    }),()=>console.log(this.state.count));
    
  }

  render() {
    return (
      <div className={classes.Container}>
        <h1>Counter</h1>
        <div className={classes.Count}>{this.state.count}</div>
        <div>
          <button onClick={this.minus}>-</button>
          <button onClick={this.reset}>0</button>
          <button onClick={this.plus}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;