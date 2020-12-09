import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);
  useEffect = () => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          orgin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data);
    };
  };
  const renderResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={this.onSearch}>
        <div className="field">
          <label> Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Search;
