import React from 'react';
import {useHistory} from 'react-router-dom';
import './ListItem.css'

const ListItem = ({avatar_url, login, type, name, owner}) => {
  const history = useHistory();
  const redirectToUserPage = () => {
    history.push(`/user/${login}`);
  };
  return (
    <div className='card' onClick={redirectToUserPage}>
      <img className='card__img'  src={avatar_url || owner.avatar_url} alt=''/>
      {/* {name && <h2 className='card__title'>{name}</h2>} */}
  <h2 className='card__title'>{login || name}</h2>
  <p className='card__text'>{type || owner.type}</p>
    </div>
  );
};

export default ListItem;