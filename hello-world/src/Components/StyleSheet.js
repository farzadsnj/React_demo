import React from "react";
import "./MyStyles.css";

function StyleSheet(props) {
  let className = props.primary ? "primary" : "";
  return <h1 className={`${className} font-xl center`}>StyleSheet</h1>;
}

export default StyleSheet;
