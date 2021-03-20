import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Table from "../components/players/Table";
import mockedPlayer from "../components/players/mockedPlayer";

function Player() {
  const [player, setPlayer] = useState({});
  const [loaded, setLoaded] = useState(false);

  const playerId = useParams().id;

  useEffect(() => {
    const response = mockedPlayer(playerId);
    if (response) {
      setPlayer(response);
      setLoaded(true);
    }
  }, [setPlayer, playerId]);

  return (
    <div className={"page"}>
      <div>Theoretically would find player with ID: {playerId}</div>
      {loaded && (
        <div>
          <h1>{player.nameGiven}</h1>
          <Table player={player} />
        </div>
      )}
    </div>
  );
}

export default Player;
