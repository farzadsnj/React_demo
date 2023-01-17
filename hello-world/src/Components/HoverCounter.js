import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  IncrementCounter = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count, IncrementCounter } = this.props;
    return <h2 onMouseOver={IncrementCounter}>Hovered {count} times</h2>;
  }
}

export default withCounter(HoverCounter, 10);
