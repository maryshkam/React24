import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom';
import {navigation} from "../../constants";
import {registerOperation} from "../../redux/operations/authOperations";
import './Registration.css'

const initialState={name:'',email:'',password:''}

const Registration = () => {
  const [form,setForm]=useState(initialState);
  const dispatch=useDispatch()

  const inputHeandler=({target})=>{
    const {name,value}=target;
    setForm(state=>({...state,[name]:value}))
  }


  const submit =(e)=>{
    e.preventDefault();
    dispatch(registerOperation(form))
    console.log(form);
  }

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={submit} className='registration-form'>
        <input onChange={inputHeandler} type='text' name='name' placeholder='username' value={form.name}></input>
        <input onChange={inputHeandler} type='email' name='email' placeholder='email'value={form.email}></input>
        <input onChange={inputHeandler} type='password' name='password' placeholder='password' value={form.password}></input>
        <button type="submit">Sign UP</button>
      </form>
      <p>If you already have an account please <NavLink to={navigation.login}>Login</NavLink></p>
    </div>
  );
};

export default Registration;