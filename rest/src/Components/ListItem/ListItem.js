import React from 'react';
import './ListItem.css'

const ListItem = ({avatar_url, login, type, name,owner}) => {
  return (
    <div className='card'>
      <img className='card__img'  src={avatar_url} alt=''/>
  <h2 className='card__title'>{login}</h2>
  <p className='card__text'>{type}</p>
    </div>
  );
};

export default ListItem;