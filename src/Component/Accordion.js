import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = (i) => {
    setActiveIndex(i);
  };

  const renderitems = items.map((item, index) => {
    const active = index == activeIndex ? "active" : "";
    return (
      <React.Fragment>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderitems}</div>;
};

export default Accordion;
