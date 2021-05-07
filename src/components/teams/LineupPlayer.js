import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPencil } from "react-icons/bs";
import { FiSave } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";

import Typeahead from "../players/Typeahead";
import positionAbbreviations from "../../utils/positionAbbreviations";
import Loading from "../shared/Loading";

const LineupPlayer = (props) => {
  const [editingPlayer, setEditingPlayer] = useState(false);
  const [fullPlayerData, setFullPlayerData] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch(
      `https://cs411baseball.web.illinois.edu/api/player/${props.playerid}`,
      requestOptions
    ).then(async (response) => {
      if (response.status === 200) {
        const data = await response.json();
        setFullPlayerData(data);
        setLoaded(true);
      }
    });
  }, [props.playerid]);

  const updatePlayer = (e) => {
    props.setDirtyPlayers({
      ...props.dirtyPlayers,
      [e.target.name]: e.target.value,
    });
  };

  const cancelEdit = () => {
    props.resetDirtyPlayers();
    setEditingPlayer(false);
  };

  const handleTypeaheadClick = (e) => {
    props.setDirtyPlayers({
      ...props.dirtyPlayers,
      [e.currentTarget.getAttribute("name")]: e.currentTarget.getAttribute(
        "playerid"
      ),
    });
  };

  return (
    <>
      {editingPlayer ? (
        <form onSubmit={props.putLineup} className={"lineup-player__form"}>
          <Typeahead
            name={props.position}
            value={props.playerid}
            onChange={updatePlayer}
            onSuggestionClick={handleTypeaheadClick}
            position={positionAbbreviations[props.position]}
          />
          <div className={"lineup-player__form-actions"}>
            <ImCancelCircle
              onClick={cancelEdit}
              className={"lineup-player__action"}
            />
            <FiSave
              onClick={props.putLineup}
              className={"lineup-player__action"}
            />
          </div>
        </form>
      ) : (
        <>
          {loaded ? (
            <div key={props.position} className={"lineup-player"}>
              <Link
                to={`/players/${props.playerid}`}
                style={{ whiteSpace: "nowrap" }}
              >{`${fullPlayerData.namefirst} ${fullPlayerData.namelast}`}</Link>
              <BsPencil
                onClick={() => {
                  setEditingPlayer(true);
                }}
                className={"lineup-player__action"}
              />
            </div>
          ) : (
            <Loading className={"loading--tiny"} />
          )}
        </>
      )}
    </>
  );
};

export default LineupPlayer;
