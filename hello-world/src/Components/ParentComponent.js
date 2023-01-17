import React, { Component } from "react";
import ChildernComponent from "./ChildernComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.getParent = this.getParent.bind(this);
  }

  getParent(childName) {
    alert(`hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildernComponent greetHandler={this.getParent} />
      </div>
    );
  }
}

export default ParentComponent;
