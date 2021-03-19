import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

function SearchForm() {
  let query = new URLSearchParams(useLocation().search).get("name");
  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState(query || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search?name=${searchTerm}`);
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className={"navbar__search-form"} onSubmit={handleSubmit}>
      <input
        type={"text"}
        value={searchTerm}
        className={"navbar__search-input"}
        placeholder={"Enter a player"}
        onChange={handleInput}
      />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchForm;
