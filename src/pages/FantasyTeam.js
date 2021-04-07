import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ForceAuthentication from "../utils/ForceAuthentication";
import mockedPlayer from "../components/players/mockedPlayer";
import sleep from "../utils/sleep";
import Loading from "../components/shared/Loading";

function FantasyTeam(props) {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    sleep(1000).then(() => {
      const player1 = mockedPlayer("bryankr01");
      const player2 = mockedPlayer("degroja01");
      setPlayers([player1, player2]);
      setLoaded(true);
    });
  }, [setPlayers]);

  return (
    <div className={"page"}>
      <ForceAuthentication
        signedIn={props.signedIn}
        setSignedIn={props.setSignedIn}
      />
      <h1>My Team</h1>
      {loaded ? (
        <div>
          {players.map((player) => {
            return (
              <div key={player.id}>
                <div>{player.position}</div>
                <Link to={`/players/${player.playerID}`}>
                  {player.nameGiven}
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

export default FantasyTeam;
