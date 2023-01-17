import React, { Component } from "react";

class From extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "react",
    };
  }

  eventHandlerChanges = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  OnchangeTextArea = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  OnchangeTopic = (event) => {
    this.state({
      topic: event.target.value,
    });
  };

  handelSubmit = (event) => {
    alert(
      `the username is ${this.state.username}, comment is ${this.state.comment}, th skill is ${this.state.topic}`
    );
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <div>
          <label>Username</label>
          <input type="text" onChange={this.state.eventHandlerChanges} />
        </div>
        <div>
          <label>Comment</label>
          <textarea onChange={this.state.OnchangeTextArea}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select onChange={this.state.OnchangeTopic}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default From;
