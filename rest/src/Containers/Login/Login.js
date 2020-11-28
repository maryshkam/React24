import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {navigation} from "../../constants";
import {useDispatch} from 'react-redux'
import {loginOperation} from "../../redux/operations/authOperations";
import './Login.css';

const initialState={email:'',password:''};

const Login = () => {
  const [form,setForm]=useState(initialState);
  const dispatch=useDispatch()

  const inputHeandler=({target})=>{
    const {name,value}=target;
    setForm(state=>({...state,[name]:value}))
  }

  const submit =(e)=>{
    e.preventDefault();
    dispatch(loginOperation(form))
    // console.log(form);
  }
  return (
    <div>
       <h1>Login</h1>
      <form onSubmit={submit} className='login-form'>
        <input onChange={inputHeandler} type='email' name='email' placeholder='email' value={form.name}></input>
        <input onChange={inputHeandler} type='password' name='password' placeholder='password' value={form.password}></input>
        <button type="submit">Login</button>
      </form>
      <p>If you already have an account please <NavLink to={navigation.registration}>Sign UP</NavLink></p>
    </div>
  );
};

export default Login;