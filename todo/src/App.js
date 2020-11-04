import React from "react";
import TodoList from './Components/TodoList/TodoList'
import "./App.css";
import TodoListHook from "./Components/TodoListHook/TodoListHook";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <TodoList /> */}
        <TodoListHook />
      </div>
    );
  }
}

export default App;