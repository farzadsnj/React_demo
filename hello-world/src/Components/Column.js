import React from "react";

function Column() {
  const items = [
    {
      id: 1,
      title: "shiraz",
      number: "255155",
    },
    {
      id: 2,
      title: "fars",
      number: "255155",
    },
  ];

  return (
    <React.Fragment>
      <td>Name</td>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.number}</p>
        </React.Fragment>
      ))}
      <td>Farzad</td>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.number}</p>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default Column;
