import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import TodoList from './Components/TodoList/TodoList';
import SimpleContextExample from './SimpleContextExample/SimpleContextExample';



function App() {
  
  return (
    <div className="App">
    
    {/* <Header/>
    <TodoList/> */}
    <SimpleContextExample/>
    </div>
  );
}

export default App;
