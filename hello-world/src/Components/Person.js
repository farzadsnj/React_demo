import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        ID {person.id} My name is {person.name} {person.family} and i'm from{" "}
        {person.city}
      </h2>
    </div>
  );
}

export default Person;
