import React from "react";
import TodoList from "./TodoList";
import "./styles.css"

function App() {
  return (
    <div className="todo-list">
      <div className="background"></div>
      <div className="overlay"></div>
      <div className="container">
        <h1 className="maintext">To-Do List </h1>
          <div className="row">
            <TodoList/>
          </div>
      </div>
    </div>
  );
}



export default App;
