import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggodIn: false,
    };
  }

  render() {
    return this.state.isLoggodIn && <div>Welcome user</div>;

    // return(
    //     this.state.isLoggodIn ? <div>welcome user</div> : <div>welcome Guest</div>
    // )

    // let message
    // if(this.state.isLoggodIn){
    //     message = <div>Welcome user</div>
    // }else{
    //     message = <div>welcome Guest</div>
    // }

    // return <div>{message}</div>

    // if(this.state.isLoggodIn){
    //     return <div>Welcome Guest</div>
    // }else {
    //     return <div>Welcome Guest</div>
    // }

    // return (
    //   <div>
    //     <div>Welcome user</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting;
