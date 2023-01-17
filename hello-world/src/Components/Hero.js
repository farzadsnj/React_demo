import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    console.log("Not a Hero!");
  }
  return <div>{heroName}</div>;
}

export default Hero;
