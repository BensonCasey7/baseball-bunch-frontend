import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "../components/shared/Loading";
import MockedDisplay from "../components/players/MockedDisplay";
import Table from "../components/players/Table";
import ForceAuthentication from "../utils/ForceAuthentication";

const Player = (props) => {
  const [player, setPlayer] = useState({});
  const [playerStats, setPlayerStats] = useState({});
  const [loaded, setLoaded] = useState(false);

  const playerId = useParams().id;

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch(
      `https://cs411baseball.web.illinois.edu/api/player/${playerId}`,
      requestOptions
    ).then(async (response) => {
      if (response.status === 200) {
        const data = await response.json();
        setPlayer(data);
      }
    });
    fetch(
      `https://cs411baseball.web.illinois.edu/api/player/${playerId}/stats`,
      requestOptions
    ).then(async (response) => {
      if (response.status === 200) {
        const data = await response.json();
        setPlayerStats(adjustSeasons(data.seasons));
        setLoaded(true);
      }
    });
  }, [playerId, setPlayer, setPlayerStats]);

  return (
    <div className={"page"}>
      <ForceAuthentication
        signedIn={props.signedIn}
        setSignedIn={props.setSignedIn}
      />
      {loaded ? (
        <div>
          <h1>{`${player.namefirst} ${player.namelast}`}</h1>
          <Table playerStats={playerStats} />
        </div>
      ) : (
        <Loading />
      )}
      <MockedDisplay />
    </div>
  );
};

const adjustSeasons = (seasons) => {
  const filteredSeasons = seasons.filter((season) => {
    return season.year !== "2020";
  });
  const sortedSeasons = filteredSeasons.sort((a, b) =>
    a.year > b.year ? 1 : b.year > a.year ? -1 : 0
  );

  return sortedSeasons;
};

export default Player;
