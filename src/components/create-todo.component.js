import React, { Component } from "react";

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };

    this.state = this.initialState;
  }

  handleChange = e => {
    const { name, value } = e.target;
    console.log(this.state);
    this.setState({ [name]: value });
  };

  submitForm = () => {
    // this.props.handleSubmit(this.state);
    console.log("Data submitted", this.state);
    this.setState(this.initialState);
  };

  render() {
    const {
      todo_description,
      todo_responsible,
      todo_priority,
      todo_completed
    } = this.state;

    return (
      <div className="container-inner">
        <h2>Create Todo</h2>
        <form className="h-form" onSubmit={this.onSubmit}>
          <label className="h-label">Description</label>
          <input
            className="h-input"
            type="text"
            name="todo_description"
            value={todo_description}
            onChange={this.handleChange}
          />
          <label className="h-label">Responsible</label>
          <input
            className="h-input"
            type="text"
            name="todo_responsible"
            value={todo_responsible}
            onChange={this.handleChange}
          />
          <label className="h-label">Priority</label>
          <input
            className="h-input"
            type="text"
            name="todo_priority"
            value={todo_priority}
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

export default CreateTodo;
