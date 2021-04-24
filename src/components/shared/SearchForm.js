import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Typeahead from "../players/Typeahead";

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

  const handleTypeaheadClick = (e) => {
    setSearchTerm("");
    history.push(`/players/${e.currentTarget.getAttribute("playerid")}`);
  };

  return (
    <form className={"navbar__search-form"} onSubmit={handleSubmit}>
      <Typeahead
        value={searchTerm}
        onChange={handleInput}
        onSuggestionClick={handleTypeaheadClick}
        inputClassName={"navbar__search-input"}
        suggestionsClassName={"navbar__search-suggestions"}
      />
      <input type="submit" value="Search" className={"button"} />
    </form>
  );
}

export default SearchForm;
