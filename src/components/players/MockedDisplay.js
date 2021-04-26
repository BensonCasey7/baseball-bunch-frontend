import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Table from "./Table";
import mockedPlayer from "./mockedPlayer";
import Loading from "../shared/Loading";
import sleep from "../../utils/sleep";
import tableStructure from "./tableStructure";

const MockedPlayer = () => {
  const [player, setPlayer] = useState({});
  const [loaded, setLoaded] = useState(false);

  const playerId = useParams().id;

  useEffect(() => {
    sleep(500).then(() => {
      const response = mockedPlayer(playerId);
      if (response) {
        setPlayer(response);
        setLoaded(true);
      }
    });
  }, [setPlayer, playerId]);

  const structure = tableStructure(player.type, true);

  return (
    <div>
      <h2>Mocked</h2>
      <div>Theoretically would find player with ID: {playerId}</div>
      {loaded ? (
        <div>
          <h1>{player.nameGiven}</h1>
          <div className={"table-container"}>
            <table className={"table"}>
              <thead>
                <tr className={"table__row table__row--head"}>
                  {Object.values(structure).map((statName) => {
                    return (
                      <th key={statName} className={"table__data"}>
                        {statName}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {player.seasons.map((season) => {
                  return (
                    <tr key={season.year} className={"table__row"}>
                      {Object.keys(structure).map((statKey) => {
                        return (
                          <td
                            key={`${season.year}-${statKey}`}
                            className={"table__data"}
                          >
                            {season[statKey]}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MockedPlayer;
