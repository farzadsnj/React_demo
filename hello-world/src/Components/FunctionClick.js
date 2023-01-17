import React from "react";

function FunctionClick() {
  function clickedButton() {
    console.log("Clicked");
  }
  return (
    <div>
      <button onClick={clickedButton}>Click</button>
    </div>
  );
}

export default FunctionClick;
