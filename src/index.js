import React, { useState } from "react";
import ReactDOM from "react-dom";
import Accordion from "./Component/Accordion";
import DropDown from "./Component/DropDown";
import Search from "./Component/Search";

const items = [
  {
    title: "what is react",
    content: "react is front end javascript library",
  },
  {
    title: "what is computer",
    content: "computer is a maching",
  },
  {
    title: "what is c#",
    content: "C# is a programming language",
  },
];

const options = [
  {
    label: "React",
    value: "react",
  },
  { label: "Csharp", value: "c#" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <br/>
        <Accordion items={items} /> */}
      {/* <Search /> */}
      <DropDown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
