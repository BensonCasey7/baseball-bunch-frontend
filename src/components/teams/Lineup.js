import React, { useState, useEffect } from "react";

import Loading from "../../components/shared/Loading";
import LineupForm from "./LineupForm";

const Lineup = (props) => {
  const [team, setTeam] = useState({});
  const [lineup, setLineup] = useState([]);
  const [noLineup, setNoLineup] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    if (!noLineup) {
      fetch(
        `https://cs411baseball.web.illinois.edu/api/fantasy-team-lineup/${props.teamId}`,
        requestOptions
      ).then(async (response) => {
        if (response.status === 200) {
          const data = await response.json();
          setLineup(data);
          setLoaded(true);
        } else if (response.status === 404) {
          setNoLineup(true);
          setLoaded(true);
        }
      });
    }
  }, [setTeam, props.teamId, team.teamname, noLineup]);

  return (
    <div>
      <h2>Lineup</h2>
      {loaded ? (
        <div>
          Player IDs
          {lineup.map((player, index) => {
            return <div key={player.playerid + index}>{player.playerid}</div>;
          })}
        </div>
      ) : (
        <Loading />
      )}
      {noLineup ? (
        <LineupForm teamId={props.teamId} setNoLineup={setNoLineup} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Lineup;
