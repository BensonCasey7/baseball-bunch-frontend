import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Player() {
  const [player, setPlayer] = useState({});
  const [loaded, setLoaded] = useState(false);

  const playerId = useParams().id;

  useEffect(() => {
    setPlayer(mockedPlayerData);
    setLoaded(true);
  }, [setPlayer]);

  return (
    <div className={"page"}>
      <div>Theoretically would find player with ID: {playerId}</div>
      {loaded && (
        <div>
          <h1>{player.nameGiven}</h1>
          <table className={"table"}>
            <thead>
              <tr className={"table__row table__row--head"}>
                {Object.values(tableStructure()).map((statName) => {
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
                    {Object.keys(tableStructure()).map((statKey) => {
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
      )}
    </div>
  );
}

function mockedPlayerData() {
  return {
    playerID: "bryankr01",
    nameFirst: "Kris",
    nameLast: "Bryant",
    nameGiven: "Kris Bryant",
    weight: "230",
    height: "77",
    bats: "R",
    throws: "R",
    seasons: [
      {
        year: "2018",
        age: "26",
        team: "CHC",
        g: "102",
        pa: "457",
        ab: "389",
        r: "59",
        h: "106",
        d: "28",
        t: "3",
        hr: "13",
        rbi: "52",
        sb: "2",
        cs: "4",
        bb: "48",
        so: "107",
        ba: ".272",
        obp: ".374",
        slg: ".460",
        ops: ".834",
        fantasyPts: "250",
      },
      {
        year: "2019",
        age: "27",
        team: "CHC",
        g: "147",
        pa: "634",
        ab: "543",
        r: "108",
        h: "153",
        d: "35",
        t: "1",
        hr: "31",
        rbi: "77",
        sb: "4",
        cs: "0",
        bb: "74",
        so: "145",
        ba: ".282",
        obp: ".382",
        slg: ".521",
        ops: ".903",
        fantasyPts: "350",
      },
    ],
  };
}

function tableStructure() {
  return {
    year: "Year",
    age: "Age",
    team: "Team",
    g: "G",
    pa: "PA",
    ab: "AB",
    r: "R",
    h: "H",
    d: "2B",
    t: "3B",
    hr: "HR",
    rbi: "RBI",
    sb: "SB",
    cs: "CS",
    bb: "BB",
    so: "SO",
    ba: "BA",
    obp: "OBP",
    slg: "SLG",
    ops: "OPS",
    fantasyPts: "Fantasy Points",
  };
}

export default Player;
