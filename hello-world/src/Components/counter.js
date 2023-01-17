import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        counter - {this.state.count}
        <button onClick={() => this.increase()}>increase</button>
      </div>
    );
  }
}

export default Counter;
