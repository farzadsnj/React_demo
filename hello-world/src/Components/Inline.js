import React from "react";
import "./MyStyles.css";

const heading = {
  fontSize: "72px",
  color: "blue",
};

function Inline() {
  return (
    <div>
      <h1 className="error">Error</h1>
      <h1 style={heading}>inline</h1>
    </div>
  );
}

export default Inline;
