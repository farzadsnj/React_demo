import React from "react";
import Person from "./Person";

function NameList() {
  const personlist = [
    {
      id: 1,
      name: "farzad",
      family: "sanjarani",
      city: "shiraz",
    },
    {
      id: 2,
      name: "farzadff",
      family: "sanjaraniff",
      city: "shirazff",
    },
  ];

  const names = ["farzaddd", "sanjaranidd", "shirazdd"];
  const NameList2 = names.map((n, index) => (
    <h2 key={index}>
      {index} {n}
    </h2>
  ));
  const persons = personlist.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return (
    <div>
      {NameList2}
      {persons}
    </div>
  );
}

export default NameList;
