import React from 'react';
import './ListItem.css'

const ListItem = ({avatar_url, login, type, name, owner}) => {
  return (
    <div className='card'>
      <img className='card__img'  src={avatar_url || owner.avatar_url} alt=''/>
      {/* {name && <h2 className='card__title'>{name}</h2>} */}
  <h2 className='card__title'>{login || name}</h2>
  <p className='card__text'>{type || owner.type}</p>
    </div>
  );
};

export default ListItem;