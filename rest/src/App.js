import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
// import Form from './Components/Form/Form';
import List from './Components/List/List';
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from './Conteiners/Home/Home';
import User from './Conteiners/Users/Users';
import Repos from './Conteiners/Repos/Repos';
import SingleUser from './Components/SingleUser/SingleUser';

function App() {
  return (
    <div className="App">
     <Header/>
     <Switch>
      <Route exact path="/" component={Home}></Route>
      
      <Route exact path="/user" component={User}></Route>
      <Route path='/user/:name' component={SingleUser}></Route>
      
      <Route exact path="/repos" component={Repos}></Route>
      
    <Redirect to='/'></Redirect>
     </Switch>
    </div>
  );
}

export default App;
