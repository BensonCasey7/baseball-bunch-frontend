import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Loading from "../components/shared/Loading";
import PlayerWithYears from "../components/players/PlayerWithYears";

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const query = new URLSearchParams(useLocation().search).get("name");

  useEffect(() => {
    if (query.length < 4) {
      setLoaded(true);
    } else {
      setLoaded(false);
      const requestOptions = {
        method: "GET",
      };
      fetch(
        `https://cs411baseball.web.illinois.edu/api/search?name=${query}`,
        requestOptions
      ).then(async (response) => {
        if (response.status === 200) {
          const data = await response.json();
          setSearchResults(data);
          setLoaded(true);
        }
      });
    }
  }, [query, setSearchResults]);

  return (
    <div className={"page"}>
      <h1>Search</h1>
      <h3>
        Theoretical search results for "<code>{query}"</code>
      </h3>
      {loaded ? (
        <div>
          {searchResults.map((player) => {
            return (
              <div key={player.playerid}>
                <Link to={`/players/${player.playerid}`}>
                  <PlayerWithYears player={player} />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Search;
