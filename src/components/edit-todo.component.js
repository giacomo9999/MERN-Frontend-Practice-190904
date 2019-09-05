import React, { Component } from "react";
import axios from "axios";

class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };

  }

  handleChange = e => {
    const { name, value } = e.target;
    console.log(this.state);
    this.setState({ [name]: value });
  };

  submitForm = () => {
    // this.props.handleSubmit(this.state);
    console.log("Data submitted", this.state);
    axios
      .post(
        "http://localhost:4000/todos/update/" + this.props.match.params.id,
        this.state
      )
      .then(res => console.log(res.data));
    this.props.history.push("/");
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          todo_description: response.data.todo_description,
          todo_responsible: response.data.todo_responsible,
          todo_priority: response.data.todo_priority,
          todo_completed: response.data.todo_completed
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("Data In: ", this.state);
    return (
      <div className="container-inner">
        <h2>Edit Todo</h2>
        <form className="h-form" onSubmit={this.onSubmit}>
          <label className="h-label">Description</label>
          <input
            className="h-input"
            type="text"
            name="todo_description"
            value={this.state.todo_description}
            onChange={this.handleChange}
          />
          <label className="h-label">Responsible</label>
          <input
            className="h-input"
            type="text"
            name="todo_responsible"
            value={this.state.todo_responsible}
            onChange={this.handleChange}
          />
          <label className="h-label">Priority</label>
          <input
            className="h-input"
            type="text"
            name="todo_priority"
            value={this.state.todo_priority}
            onChange={this.handleChange}
          />
          <input
            type="button"
            className="h-btn"
            value="Submit"
            onClick={this.submitForm}
          />
        </form>
      </div>
    );
  }
}

export default EditTodo;
