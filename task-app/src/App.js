import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import uniqid from "uniqid";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.array,
    };
  }

  init() {
    this.setState({ index: this.props.number });
  }

  deleteItem = (id) => {
    this.setState((prevState) => ({
      list: prevState.list.filter((item) => item.id !== id),
    }));
  };

  render() {
    return (
      <div className="flex flex-col items-center">
        {this.props.array.map((item, index) => (
          <div>
            <li
              className="border-2 border-black p-2 mt-2"
              key={this.props.array[index].id}
            >
              {index} {item.value}
            </li>
            <button onClick={this.deleteItem(index)}>delete</button>
          </div>
        ))}
      </div>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        value: "",
        id: uniqid(),
      },
      arrayTask: [],
      count: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.storeValue = this.storeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      task: { value: event.target.value, id: this.state.task.id },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let i = this.state.count;
    this.setState({ count: i + 1 });
  }

  storeValue() {
    this.setState({
      arrayTask: this.state.arrayTask.concat(this.state.task),
      task: {
        value: "",
        id: uniqid(),
      },
    });
  }

  render() {
    return (
      <div>
        <form className="mt-10" onSubmit={this.handleSubmit}>
          <fieldset className="border-2 border-black p-2">
            <legend className="ml-2">Input your text</legend>
            <div className="flex justify-around">
              <input
                className="bg-black text-white"
                value={this.state.task.value}
                onChange={this.handleChange}
              ></input>
              <button
                className="border-2 border-black p-2 rounded-xl"
                type="submit"
                onClick={this.storeValue}
              >
                SUBMIT
              </button>
            </div>
          </fieldset>
        </form>
        <div>
          <ul className="mt-10">
            <Tasks array={this.state.arrayTask} number={this.state.count} />
          </ul>
        </div>
      </div>
    );
  }
}

export default Form;
