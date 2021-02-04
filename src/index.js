import React, { useState } from "react";
import ReactDOM from "react-dom";
import Accordion from "./Component/Accordion";
import DropDown from "./Component/DropDown";
import Header from "./Component/Header";
import Route from "./Component/Route";
import Search from "./Component/Search";
import Translate from "./Component/Translate";

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
      {/* <DropDown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> */}

      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
