import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("new language or text");
  }, [language, text]);
  return <div>I am Convert</div>;
};

Convert.prototype = {
  language: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Convert;
