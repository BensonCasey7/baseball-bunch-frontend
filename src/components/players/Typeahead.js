import React, { useState, useEffect } from "react";

import PlayerWithYears from "./PlayerWithYears";
import useKeypress from "../../hooks/useKeypress";

const Typeahead = (props) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchTerms = Object.entries({
      name: props.value,
      position: props.position,
    })
      .map(([key, value]) => {
        return value ? `${key}=${value}` : false;
      })
      .filter((condition) => {
        return !!condition;
      })
      .join("&");

    const delayDebounceFn = setTimeout(() => {
      if (props.value.length < 4) {
        setSearchResults([]);
      } else {
        const requestOptions = {
          method: "GET",
        };
        fetch(
          `https://cs411baseball.web.illinois.edu/api/search?${searchTerms}`,
          requestOptions
        ).then(async (response) => {
          if (response.status === 200) {
            const data = await response.json();
            setSearchResults(data);
          }
        });
      }
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [props.position, props.value]);

  useKeypress("Escape", () => {
    setSearchResults([]);
  });

  const handleSuggestionClick = (e) => {
    e.preventDefault();
    setSearchResults([]);
    props.onSuggestionClick(e);
  };

  return (
    <div className={"typeahead"}>
      <input
        type={"text"}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={props.inputClassName}
      />
      {searchResults.length === 0 ? (
        <></>
      ) : (
        <div className={`typeahead-results ${props.suggestionsClassName}`}>
          {searchResults.map((player) => {
            return (
              <div
                key={player.playerid}
                className={"typeahead-results__result"}
                name={props.name}
                playerid={player.playerid}
                onClick={handleSuggestionClick}
              >
                <PlayerWithYears player={player} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Typeahead;
