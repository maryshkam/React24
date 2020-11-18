import React from "react";
import {connect,useSelector} from 'react-redux'
import classes from "./Counter.module.css";
import {reset,plus,minus} from '../../redux/action/counerAction'

const Counter = (props) => {
  // const counter=useSelector(store=>store.counter);
  console.log(props);

  return (
    <div className={classes.Container}>
      <h1>Counter</h1>
      {/* <div className={classes.Count}>{props.counter}</div> */}
      <div className={classes.Count}>{props.counter}</div>
      <div>
        {/* <button onClick={() => props.decrement(10)}>-</button>
        <button onClick={props.reset}>0</button>
        <button onClick={() => props.increment(150)}>+</button> */}
        <button onClick={props.minus}>-</button>
        <button onClick={props.refresh}>0</button>
        <button onClick={props.plus}>+</button>
      </div>
    </div>
  );
};

// export default Counter;
const mapStateToProps=(state)=>({
  counter: state.counter
})

const mapDispatchToProps = {
refresh: reset,
minus: minus,
plus: plus
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);

