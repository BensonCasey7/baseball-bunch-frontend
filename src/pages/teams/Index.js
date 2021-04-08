import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ForceAuthentication from "../../utils/ForceAuthentication";
import Loading from "../../components/shared/Loading";

export const Index = (props) => {
  const [teams, setTeams] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch(
      "https://cs411baseball.web.illinois.edu/api/fantasy-team",
      requestOptions
    ).then(async (response) => {
      if (response.status === 200) {
        const data = await response.json();
        setTeams(data);
        setLoaded(true);
      } else if (response.status === 404) {
        setTeams([]);
        setLoaded(true);
      }
    });
  }, [setTeams]);

  return (
    <div className={"page"}>
      <ForceAuthentication
        signedIn={props.signedIn}
        setSignedIn={props.setSignedIn}
      />
      <h1>My Fantasy Teams</h1>
      {loaded ? (
        <div>
          <div className={"teams-list"}>
            {teams.map((team) => {
              return (
                <div>
                  <Link
                    to={`/teams/${team.fantasyteamid}`}
                    className={"teams-list__team"}
                  >
                    {team.teamname}
                  </Link>
                </div>
              );
            })}
          </div>
          <Link to="/teams/new" className={"button"}>
            Create New Team
          </Link>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
