import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BsPencil, BsTrash } from "react-icons/bs";

import Loading from "../../components/shared/Loading";
import Lineup from "../../components/teams/Lineup";
import ForceAuthentication from "../../utils/ForceAuthentication";
import Prediction from "../../components/teams/Prediction";

export const Show = (props) => {
  const [team, setTeam] = useState({});
  const [name, setName] = useState("");
  const [editingName, setEditingName] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();

  const teamId = useParams().id;

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch(
      `https://cs411baseball.web.illinois.edu/api/fantasy-team/${teamId}`,
      requestOptions
    ).then(async (response) => {
      if (response.status === 200) {
        const data = await response.json();
        setTeam(data);
        setName(team.teamname);
        setLoaded(true);
      }
    });
  }, [setTeam, teamId, team.teamname]);

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const putName = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        teamname: name,
      }),
    };
    fetch(
      `https://cs411baseball.web.illinois.edu/api/fantasy-team/${team.teamname}/name`,
      requestOptions
    ).then(async (response) => {
      if (response.status === 200) {
        setTeam({
          ...team,
          teamname: name,
        });
      } else {
        // Server Error
      }
      setEditingName(false);
    });
  };

  const deleteTeam = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        teamname: name,
      }),
    };
    fetch(
      `https://cs411baseball.web.illinois.edu/api/fantasy-team/${team.teamname}/name`,
      requestOptions
    ).then(async (response) => {
      if (response.status === 200) {
        history.push("/teams");
      } else {
        // Server Error
      }
      setEditingName(false);
    });
  };

  return (
    <div className={"page"}>
      <ForceAuthentication
        signedIn={props.signedIn}
        setSignedIn={props.setSignedIn}
      />
      <Link to={"/teams"}>Back to Teams</Link>
      {loaded ? (
        <div>
          {editingName ? (
            <form onSubmit={putName}>
              <input
                type={"text"}
                value={name}
                placeholder={"Username"}
                className={"team__title"}
                onChange={handleNameInput}
              />
              <input
                type={"button"}
                value={"Cancel"}
                onClick={() => {
                  setEditingName(false);
                }}
              />
              <input type={"submit"} value={"Change Name"} />
            </form>
          ) : (
            <div>
              <div className={"team__title"}>
                {team.teamname}
                <BsPencil
                  onClick={() => {
                    setEditingName(true);
                  }}
                  className={"team__action team__action--icon"}
                />
                <BsTrash
                  onClick={deleteTeam}
                  className={"team__action team__action--icon"}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
      <div className={"grid-x"}>
        <div className={"cell large-6"}>
          <Lineup teamId={teamId} />
        </div>
        <div className={"cell large-6"}>
          <Prediction teamId={teamId} />
        </div>
      </div>
    </div>
  );
};
