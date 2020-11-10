import React,{useState} from 'react';
import {withCredentials,request} from '../../helpers/request'
import './Form.css'

const Form = ({updateUsers,loaderToogle,errorToogle}) => {
  const [search,setSearch]=useState('');
  const [type,setType]=useState('users')

  const inputHeandler =({target})=>{
    const {value}=target;
    setSearch(value)
  }

  
  const onSubmit= async (e)=>{
    e.preventDefault();
    const url=withCredentials(`https://api.github.com/search/${type}?q=${search}&page=22&per_page=2&`)
    try {
    await loaderToogle()
    await errorToogle(false)
    const result = await request('get',url);
    console.log(result);
    updateUsers(result.items);
    
      
    } catch (error) {
      console.log(error.message);
      errorToogle(true)
    }finally{
      loaderToogle();
      setSearch('');
      // setType('')

    }
    
  }

  return (
    <div>
      <form onSubmit={onSubmit} className='form'> 
        <input onChange={inputHeandler}  type='text' name='search' value={search}></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Form;
