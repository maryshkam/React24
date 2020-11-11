import React,{useState} from 'react';
import {Route,Redirect} from 'react-router-dom'

const PrivateRoute = (props) => {
  const [auth,setAuth]=useState(true);
  const Interface=props.component;
  console.log(props);
  return (
    <div>
     <Route path={props.path} render={()=>auth ? <Interface/> : <Redirect to='/user'/> }/>
    </div>
  );
};

export default PrivateRoute;