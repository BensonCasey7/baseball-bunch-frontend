import React, { useState, useEffect } from "react";

import PlayerWithYears from "./PlayerWithYears";

const Typeahead = (props) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (props.value === "") {
        setSearchResults([]);
      } else {
        const requestOptions = {
          method: "GET",
        };
        fetch(
          `https://cs411baseball.web.illinois.edu/api/search?name=${props.value}`,
          requestOptions
        ).then(async (response) => {
          if (response.status === 200) {
            const data = await response.json();
            setSearchResults(data);
          }
        });
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [props.value]);

  return (
    <div className={"typeahead"}>
      <input
        type={"text"}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      <div className={"typeahead-results"}>
        {searchResults.map((player) => {
          return (
            <div
              key={player.playerid}
              className={"typeahead-results__result"}
              name={props.name}
              playerid={player.playerid}
              onClick={props.onSuggestionClick}
            >
              <PlayerWithYears player={player} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Typeahead;
