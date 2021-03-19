import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Search() {
  const query = new URLSearchParams(useLocation().search).get("name");

  const [searchResults, setSearchResults] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setSearchResults(mockedSearchResults);
    setLoaded(true);
  }, [setSearchResults]);

  return (
    <div className={"page"}>
      <h1>Search</h1>
      <h3>
        Theoretical search results for "<code>{query}"</code>
      </h3>
      {loaded && (
        <div>
          {searchResults.players.map((player) => {
            return (
              <div key={player.id}>
                <Link to={`/players/${player.id}`}>{player.name}</Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function mockedSearchResults() {
  return {
    players: [
      {
        name: "Kris Bryant",
        id: "bryankr01",
      },
    ],
  };
}

export default Search;
