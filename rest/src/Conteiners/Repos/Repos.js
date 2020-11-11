import React from 'react';
import {NavLink, Switch,Route} from 'react-router-dom';
import {useHistory,useLocation,useParams,useRouteMatch} from 'react-router-dom';

import Public from '../../Components/Public/Public';
import Private from '../../Components/Private/Private'
import './Repos.css'

const Repos = ({title}) => {
  // const location =useLocation();
const match =useRouteMatch();
// console.log(location);
console.log(match);
  return (
    <>
    <div>
      <h1>{title}</h1>
      <ul className='submenu'>
        <li ><NavLink to={`${match.path}/private`} className='submenu__link'>Private Repos</NavLink></li>
        <li ><NavLink to={`${match.path}/public`} className='submenu__link'>Public Repos</NavLink></li>
      </ul>
    

    </div>
    <Switch>
      <Route exact path={`${match.path}/private`} component={Private}/>
      <Route exact path={`${match.path}/public`} component={Public}/>
    </Switch>
    </>
  );
};

// repos/public/rep/idfioeutreou
// repos/public/rep/id67899090

export default Repos;