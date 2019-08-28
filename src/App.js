import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import TodosList from "./components/todos-list.component";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.component";

function App() {
  return (
    <Router>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="active">
              Todos
            </Link>
          </li>
          <li>
            <Link to="/create" className="active">
              Create Todo
            </Link>
          </li>
        </ul>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" exact component={EditTodo} />
        <Route path="/create" exact component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
