import React, { Component } from "react";

export class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello new class",
    };

    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      message: "Goodbye",
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>click bind</button>
        <button onClick={()=> this.clickHandler()}>click</button>
        <button onClick={this.clickHandler}>click event</button>
      </div>
    );
  }
}

export default EventBinding;
