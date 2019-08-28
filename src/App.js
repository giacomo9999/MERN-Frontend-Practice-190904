import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import TodosList from "./components/todos-list.component";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.component";

function App() {
  return (
    <Router>
      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" exact component={EditTodo} />
      <Route path="/create" exact component={CreateTodo} />

      <div className="container-outer">
        <h1>I Am The App</h1>
      </div>
    </Router>
  );
}

export default App;
