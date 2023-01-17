import React from "react";

const withCounter = (WrappedComponent, IncrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    IncrementCounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + IncrementNumber };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          IncrementCounter={this.IncrementCounter}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
