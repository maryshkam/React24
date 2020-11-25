import axios from 'axios';
import {setError,resetError} from '../action/errorAction';

import {loaderOff,loaderOn} from '../action/loaderAction';
import {addItem,deleteItem,setTask} from '../action/todoList';
import {clearInput} from '../action/input'


const options = {
  header: {'Content-Type': 'application/json'}
  // header: {"Content-Type": "application/json"}
}

export const getTaskOperation =()=>async(dispatch)=>{
  try {
    dispatch(loaderOn());
    const result= await axios.get('http://localhost:5000/tasks')
    dispatch(setTask(result.data))
  } catch (error) {
    dispatch(setError('Somethong went wrong,try later'))
  }
  finally {
    dispatch(loaderOff())
  }
}


export const postTaskOperation = (task)=> async (dispatch)=>{
  try {
    dispatch(loaderOn());
    const result =await axios.post('http://localhost:5000/tasks',task,options);
    console.log(result);
    dispatch(clearInput())

  } catch (error) {
    dispatch(setError('Somethong went wrong,try later'))
  } finally {
    dispatch(loaderOff())
    
  }
}

export const deleteTaskOperation=(id)=>async(dispatch)=>{
try {
  dispatch(loaderOn());
  const result = await axios.delete(`http://localhost:5000/tasks/${id}`)
  console.log(result);
} catch (error) {
  dispatch(setError('Somethong went wrong,try later'))
} finally {
  dispatch(loaderOff())
}
}