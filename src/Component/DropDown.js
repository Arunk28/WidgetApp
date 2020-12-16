import React from "react";

const DropDown = ({ options }) => {
  const renderOption = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Colour</label>
        <div className="ui selection dropdown visible actives">
          <i className="dropdown icon"></i>
          <div className="text">Select Color</div>
          <div className="menu visible transition">{renderOption}</div>
        </div>
      </div>
    </div>
  );
};
