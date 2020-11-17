import React from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import TodoList from './Components/TodoList/TodoList';
import IsAuth from './renderProp/isAuth';
import Storage from './renderProp/Storage';



function App() {
  
  return (
    <div className="App">
    <IsAuth>
      {/* <Header/> */}
      {({isUserAuth})=><Header tittle='ghjsfh' isUserAuth={isUserAuth}/>}     
    </IsAuth>
    <Card/>
    <Storage>
      {({saveToStorage})=><TodoList saveToStorage={saveToStorage}/>}
    </Storage>
    </div>
  );
}

export default App;
