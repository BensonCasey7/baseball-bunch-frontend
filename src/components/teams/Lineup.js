import React, { useState, useEffect } from "react";

import BaseballDiamond from "../../assets/images/baseball-diamond.png";

import Loading from "../../components/shared/Loading";
import LineupForm from "./LineupForm";
import LineupPlayer from "./LineupPlayer";

const Lineup = (props) => {
  const [noLineup, setNoLineup] = useState(false);
  const [players, setPlayers] = useState({});
  const [dirtyPlayers, setDirtyPlayers] = useState({});
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
          const temp = {
            pitcher: data[0].playerid,
            catcher: data[1].playerid,
            first_base: data[2].playerid,
            second_base: data[3].playerid,
            third_base: data[4].playerid,
            short_stop: data[5].playerid,
            left_fielder: data[6].playerid,
            center_fielder: data[7].playerid,
            right_fielder: data[8].playerid,
          };
          setPlayers(temp);
          setDirtyPlayers(temp);
          setLoaded(true);
        } else if (response.status === 409) {
          setNoLineup(true);
          setLoaded(true);
        }
      });
    }
  }, [noLineup, props.teamId]);

  const putLineup = async (event) => {
    event.preventDefault();
    setLoaded(false);
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(dirtyPlayers),
    };
    fetch(
      `https://cs411baseball.web.illinois.edu/api/fantasy-team-lineup/${props.teamId}`,
      requestOptions
    ).then(async (response) => {
      if (response.status === 200) {
        setPlayers(dirtyPlayers);
      } else {
        // Server Error
      }
      setLoaded(true);
    });
  };

  const resetDirtyPlayers = () => {
    setDirtyPlayers(players);
  };

  return (
    <>
      {noLineup ? (
        <LineupForm
          teamId={props.teamId}
          setNoLineup={setNoLineup}
          putLineup={putLineup}
        />
      ) : (
        <>
          {loaded ? (
            <>
              <div
                className={"team-field"}
                style={{
                  backgroundImage: `url(${BaseballDiamond})`,
                }}
              >
                {Object.keys(dirtyPlayers).map((position) => {
                  return (
                    <div
                      className={`team-field__player team-field__player--${position.replace(
                        "_",
                        "-"
                      )}`}
                    >
                      <LineupPlayer
                        key={position}
                        position={position}
                        playerid={dirtyPlayers[position]}
                        dirtyPlayers={dirtyPlayers}
                        setDirtyPlayers={setDirtyPlayers}
                        resetDirtyPlayers={resetDirtyPlayers}
                        putLineup={putLineup}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <Loading />
          )}
        </>
      )}
    </>
  );
};

export default Lineup;
