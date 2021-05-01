import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPencil } from "react-icons/bs";

import Typeahead from "../players/Typeahead";
import positionAbbreviations from "../../utils/positionAbbreviations";

const LineupPlayer = (props) => {
  const [editingPlayer, setEditingPlayer] = useState(false);

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
        <form onSubmit={props.putLineup} style={{ display: "flex" }}>
          <Typeahead
            name={props.position}
            value={props.playerid}
            onChange={updatePlayer}
            onSuggestionClick={handleTypeaheadClick}
            position={positionAbbreviations[props.position]}
          />
          <input type={"button"} value={"Cancel"} onClick={cancelEdit} />
          <input type={"submit"} value={"Save Player"} />
        </form>
      ) : (
        <div key={props.position} className={"lineup-player"}>
          <Link to={`/players/${props.playerid}`}>{props.playerid}</Link>
          <BsPencil
            onClick={() => {
              setEditingPlayer(true);
            }}
            className={"lineup-player__action"}
          />
        </div>
      )}
    </>
  );
};

export default LineupPlayer;
