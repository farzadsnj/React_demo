import React from "react";

function ChildernComponent(props) {
  return (
    <button onClick={() => props.greetHandler("Child")}>Greet Parent</button>
  );
}

export default ChildernComponent;
