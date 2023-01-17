import React from "react";

export const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        First {name} last {heroName}
      </h1>
      {props.children}
    </div>
  );
};
