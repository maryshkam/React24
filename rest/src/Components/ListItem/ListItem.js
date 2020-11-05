import React from 'react';
import './ListItem.css'

const ListItem = ({owner}) => {
  return (
    <div className='card'>
      <img className='card__img'  src={owner.avatar_url} alt=''/>
  <h2 className='card__title'>{owner.login}</h2>
  <p className='card__text'>{owner.type}</p>
    </div>
  );
};

export default ListItem;