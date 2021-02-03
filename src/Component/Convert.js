import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translate, setTranslate] = useState("");
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        },
      );
      setTranslate(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, text]);
  return <div>{translate}</div>;
};

Convert.prototype = {
  language: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Convert;
