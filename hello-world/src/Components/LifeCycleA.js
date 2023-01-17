import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "farzad",
    };
    console.log("LA const");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LA GetState : 1");
    return null;
  }
  componentDidMount() {
    console.log("LA componentDID : 2");
  }

  shouldComponentUpdate() {
    console.log("shouldUpdateLA : 3");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getsnapshotAL : 4");
    return null;
  }

  componentDidUpdate() {
    console.log("comp Update LA : 5");
  }

  changeState() {
    this.setState({
      name: "CodeChange",
    });
  }

  render() {
    console.log("LA render");
    return (
      <div>
        LifeCycleA render
        <button onChange={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
