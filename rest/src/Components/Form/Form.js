import React,{useState,} from 'react';
import {useHistory,useLocation,useParams,useRouteMatch} from 'react-router-dom';
import {withCredentials,request} from '../../helpers/request'
import './Form.css'

const Form = ({search,inputHeandler,getUsers,resetForm}) => {
const history=useHistory();
const location=useLocation();
console.log(history);

  const submitHeandler=(e)=>{
    e.preventDefault();
    getUsers(search);
    resetForm();
    history.push({...location, search: `?userName=${search}`})
    console.log(location);
  }
  
  return (
    <div>
      <form onSubmit={submitHeandler}  className='form'> 
        <input onChange={inputHeandler}  type='text' name='search' value={search}></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Form;
