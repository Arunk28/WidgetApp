import React, { useState } from "react";
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
  return (
    <div>
      <DropDown
        selected={language}
        onSelectedChange={setLanguage}
        options={Options}
      />
    </div>
  );
};

export default Translate;
