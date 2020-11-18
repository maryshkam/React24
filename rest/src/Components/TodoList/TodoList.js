import React,{useState} from 'react';
import './TodoList.css';
import withStorage from '../../hoc/withStorage';
import {CSSTransition,TransitionGroup} from 'react-transition-group'

const TodoList = ({saveToStorage}) => {
  const [input,setInput]=useState('');
  const [tasks,setTasks]=useState([]);
  const [alert,setAlert]=useState(false);

  const toggleModal=()=>{
    setAlert(prev=>!prev)
  }

  
  const inputHeandler =(e)=>{
    const value = e.target.value;
    setInput(value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const task ={
      id: Date.now(),
      text: input
    };
    const newState=[...tasks,task]
    setTasks(newState);
    saveToStorage('tasks',newState)
    setInput('');
  }

  const deleteTask = (id) => {
    setTasks((state) => state.filter((el) => el.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input onChange={inputHeandler} type='text' name='text' value={input}></input>
        <button type='submit'>Save</button>
      </form>
      

      <TransitionGroup component="ul"  className="list">
        {tasks.map((el) => (
          <CSSTransition key={el.id} classNames="list__item" timeout={800}>
            <li className="item" onClick={() => deleteTask(el.id)}>
              {el.text}
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>


      <CSSTransition 
      classNames='modal'
      in={alert} 
      timeout={{enter:500,exit:350}}
      mountOnEnter
      unmountOnExit
      >
      <div className='modal'>Alert</div>
      </CSSTransition>

      {/* {alert && (<CSSTransition>
      <div className='modal'>Alert</div>
      </CSSTransition>)} */}
      

      {/* {alert &&<div className='modal'>Alert</div>} */}
      <button onClick={toggleModal}>Show Modal</button>
    </div>
  );
};

// export default TodoList;
export default withStorage(TodoList);