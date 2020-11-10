import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import './List.css'


const List =({users})=> {
console.log(users);
    return (
    <>
      <div className='container'>
      {users.map(card=><ListItem key={card.id} {...card}/>)}
      </div>
      </>
    );
  }


export default List;
