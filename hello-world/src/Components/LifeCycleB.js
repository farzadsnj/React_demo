import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "farzad",
    };
    console.log("LB const");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LB GetState");
    return null;
  }
  componentDidMount() {
    console.log("LB componentDID");
  }

  shouldComponentUpdate() {
    console.log("shouldUpdateLB");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getsnapshotLB");
    return null;
  }

  componentDidUpdate() {
    console.log("comp Update LB");
  }

  render() {
    console.log("LB render");
    return <div>LifeCycleB render</div>;
  }
}

export default LifeCycleB;
