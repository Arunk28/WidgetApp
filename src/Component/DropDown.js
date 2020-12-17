import { render } from "@testing-library/react";
import React from "react";

const DropDown = ({ options, selected, onSelectedChange }) => {
  const renderOption = options.map((option) => {
    if (option.value == selected.value) return null;
    return (
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui compact menu">
      <div className="ui simple dropdown item">
        {selected.label}
        <i className="dropdown icon" />
        <div className="menu">{renderOption}</div>
      </div>
    </div>
  );
};

export default DropDown;
