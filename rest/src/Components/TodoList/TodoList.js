import React,{useState} from 'react';
import './TodoList.css';
import withStorage from '../../hoc/withStorage'

const TodoList = ({saveToStorage}) => {
  const [input,setInput]=useState('');
  const [tasks,setTasks]=useState([]);
  const [alert, setAlert] = useState(false);

  const toggleModal = () => {
    setAlert((state) => !state);
  };

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
      <ul>
      {tasks.map(el=><li key={el.id}>{el.text}</li>)}
      </ul>
    </div>
  );
};

// export default TodoList;
export default withStorage(TodoList);