import React from "react";
import classes from "./Counter.module.css";

const Counter = () => {

  

  return (
    <div className={classes.Container}>
      <h1>Counter</h1>
      {/* <div className={classes.Count}>{props.counter}</div> */}
      <div className={classes.Count}>10</div>
      <div>
        {/* <button onClick={() => props.decrement(10)}>-</button>
        <button onClick={props.reset}>0</button>
        <button onClick={() => props.increment(150)}>+</button> */}
        <button >-</button>
        <button >0</button>
        <button >+</button>
      </div>
    </div>
  );
};



export default Counter;

