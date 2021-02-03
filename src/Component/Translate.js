import React, { useState } from "react";
import Convert from "./Convert";
import DropDown from "./DropDown";

const Options = [
  {
    label: "Afkhan",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  { label: "Hindi", value: "hi" },
];

const Translate = () => {
  const [language, setLanguage] = useState(Options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input type="text" onChange={(e) => setText(e.target.value)}></input>
        </div>
      </div>
      <DropDown
        selected={language}
        onSelectedChange={setLanguage}
        options={Options}
      />

      <br></br>
      <div className="ui header">
        Output : <Convert language={language} text={text} />
      </div>
    </div>
  );
};

export default Translate;
