import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./Component/Accordion";
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
const App = () => {
  return (
    <div>
      {/* <br/>
        <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
