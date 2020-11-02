import React, {useState} from 'react';
import classes from './Counter.module.css'

const result ={
  name:'MAr',
  age: 25
}


const Counter = () => {
  const [count,setCount]= useState(12);
  const [modal,setModal]=useState('false')


  const reset =()=>{
    setCount(0)
  }
  const plus =()=> {
    setCount(count+1)
  }

  const minus =()=>{
    setCount(prev=>prev-1)
  }

  return (
    <div className={classes.Container}>
        <h1>Counter</h1>
        <div className={classes.Count}>{count}</div>
        <div>
          <button onClick={minus}>-</button>
          <button onClick={reset}>0</button>
          <button onClick={plus}>+</button>
        </div>
      </div>
  );
};

export default Counter;
// import React, { Component} from "react";
// import PropTypes  from "prop-types";
// import classes from "./Counter.module.css";

// class Counter extends Component {
//   // constructor(){
//   //   super()  
    
//   //   this.state={
//   //     count:10
//   //   }
//   //   this.plus=this.plus.bind(this)
      
//   // }
//   state = {
//     count: 0,
//     age: 25,
//     gender: 'male',
//   }

//   plus = async () => {
//     // console.log('helo');
//     // this.state.count=20;
//   await this.setState((prevState)=>({
//     count: prevState.count+1
//   }));
//   console.log(this.state);
//     // this.setState({count: 15})
//   }

  // reset =()=>{
  //   this.setState({count:0})
  //   // this.setState(()=>({}))
  // }

//   minus = () => {
//     this.setState((prevState)=>({
//       count: prevState.count-1
//     }),()=>console.log(this.state.count));
    
//   }

//   render() {
//     return (
      // <div className={classes.Container}>
      //   <h1>Counter</h1>
      //   <div className={classes.Count}>{this.state.count}</div>
      //   <div>
      //     <button onClick={this.minus}>-</button>
      //     <button onClick={this.reset}>0</button>
      //     <button onClick={this.plus}>+</button>
      //   </div>
      // </div>
//     );
//   }
// }

// export default Counter;