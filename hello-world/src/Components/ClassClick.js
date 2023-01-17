import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("clicked button");
  }
  render() {
    return <button onClick={this.clickHandler}>click me</button>;
  }
}

export default ClassClick;
