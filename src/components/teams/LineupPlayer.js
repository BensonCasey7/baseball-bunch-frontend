import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPencil } from "react-icons/bs";

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

  return (
    <div>
      {editingPlayer ? (
        <form onSubmit={props.putLineup}>
          <span>{props.position} </span>
          <input
            type={"text"}
            value={props.playerid}
            name={props.position}
            onChange={updatePlayer}
          />
          <input type={"button"} value={"Cancel"} onClick={cancelEdit} />
          <input type={"submit"} value={"Save Player"} />
        </form>
      ) : (
        <div key={props.position}>
          <span>{props.position} </span>
          <Link to={`/players/${props.playerid}`}>{props.playerid}</Link>
          <BsPencil
            onClick={() => {
              setEditingPlayer(true);
            }}
            className={"team__action team__action--icon"}
          />
        </div>
      )}
    </div>
  );
};

export default LineupPlayer;
