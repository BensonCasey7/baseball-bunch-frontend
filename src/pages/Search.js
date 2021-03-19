import React from "react";
import { useLocation } from "react-router-dom";

function Search() {
  let query = new URLSearchParams(useLocation().search).get("name");

  return (
    <div className={"page"}>
      <h1>Search</h1>
      <h3>
        Search results for "<code>{query}"</code>
      </h3>
      <h5>Not Yet Implemented</h5>
    </div>
  );
}

export default Search;
