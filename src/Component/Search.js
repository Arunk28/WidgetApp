import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState(null);
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
