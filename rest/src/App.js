import React, {Suspense,lazy,useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';

// import Form from './Components/Form/Form';
import List from './Components/List/List';
import {Switch,Route,Redirect} from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
// import Home from './Conteiners/Home/Home';
// import User from './Conteiners/Users/Users';
// import Repos from './Conteiners/Repos/Repos';

// import SingleUser from './Components/SingleUser/SingleUser';

const Home =lazy(()=>import('./Conteiners/Home/Home'));
const User = lazy(()=>import('./Conteiners/Users/Users'));
const Repos = lazy(()=>import('./Conteiners/Repos/Repos'));
const SingleUser =lazy(()=>import('./Components/SingleUser/SingleUser.js'))

function App() {
  
  return (
    <div className="App">
     <Header/>
     <Suspense fallback={<p>Loading</p>}>
     <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/user" component={User}></Route>
      <Route path='/user/:name' component={SingleUser}></Route>  
      {/* <Route path="/repos" component={Repos}></Route>    */}
      <Route path='/repos' render={(props)=><Repos {...props} title='Super page Repos'/>}/>
      {/* {auth ? <Route path='/private' component={PrivateRoute}/> : <Redirect to='/user'/>} */}
      <PrivateRoute path='/private' component={Repos}/>
      
    <Redirect to='/'></Redirect>
     </Switch>
     </Suspense>
    </div>
  );
}

export default App;
