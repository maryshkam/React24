import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import './List.css'


const List =(props)=> {
console.log(props);
    return (
    <>
      <div className='container'>
      {props.users.map(card=><ListItem key={card.id} {...card}/>)}
      </div>
      </>
    );
  }


export default List;
