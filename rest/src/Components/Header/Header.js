import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom';
import {navigation} from "../../constants";
import {logOut} from "../../redux/operations/authOperations"
import  './Header.css';

const Header = () => {
  const dispatch=useDispatch();
  const token =useSelector(state=>state.token)
  const logout=()=>{
    dispatch(logOut(token))
  }
  return (
    <header className='header'>
      <nav className='nav'>
      <NavLink className='nav__link' to={navigation.home}>Home</NavLink>
      <NavLink className='nav__link' to={navigation.registration}>Registration</NavLink>
      <NavLink className='nav__link' to={navigation.login}>Login</NavLink>
      <button onClick={logout} className='button'>LOG OUT</button>
      </nav>
      
    </header>
  );
};

export default Header;