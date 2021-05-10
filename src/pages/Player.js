import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "../components/shared/Loading";
import Table from "../components/players/Table";
import ForceAuthentication from "../utils/ForceAuthentication";
import SeasonsChart from "../components/players/SeasonsChart";
import Breadcrumbs from "../components/shared/Breadcrumbs";

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
        <>
          <Breadcrumbs
            path={[{ text: `${player.namefirst} ${player.namelast}` }]}
          />
          <div className={"player"}>
            <h1>{`${player.namefirst} ${player.namelast}`}</h1>

            <div className={"player__body"}>
              <div className={"player__table"}>
                <Table playerStats={playerStats} />
              </div>

              <div className={"player__chart"}>
                <SeasonsChart data={playerStats} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export const adjustSeasons = (seasons) => {
  const filteredSeasons = seasons.filter((season) => {
    return season.year !== "2020";
  });
  const sortedSeasons = filteredSeasons.sort((a, b) =>
    a.year > b.year ? 1 : b.year > a.year ? -1 : 0
  );

  return sortedSeasons;
};

export default Player;
