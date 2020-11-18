import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import TodoList from './Components/TodoList/TodoList';
import SimpleContextExample from './SimpleContextExample/SimpleContextExample';
import SimpleProvider from './context/Providers/Provider'




function App() {
  
  return (
    <div className="App">
    
    <Header/>
    <TodoList/>
    {/* <SimpleProvider>
      <SimpleContextExample/>
    </SimpleProvider> */}
    </div>
  );
}

export default App;
