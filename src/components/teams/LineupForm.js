import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Loading from "../../components/shared/Loading";
import Typeahead from "../players/Typeahead";

const LineupForm = (props) => {
  const [players, setPlayers] = useState({
    pitcher: "",
    catcher: "",
    first_base: "",
    second_base: "",
    third_base: "",
    short_stop: "",
    left_fielder: "",
    center_fielder: "",
    right_fielder: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [badSubmit, setBadSubmit] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const history = useHistory();

  const postLineup = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(players),
    };
    fetch(
      `https://cs411baseball.web.illinois.edu/api/fantasy-team-lineup/${props.teamId}`,
      requestOptions
    ).then(async (response) => {
      if (response.status === 201) {
        history.push(`/teams/${props.teamId}`);
        props.setNoLineup(false);
      } else {
        // Server Error
        const data = await response.json();
        setBadSubmit(true);
        setSubmitError(data.message);
        setSubmitting(false);
      }
    });
  };

  const autoFillLineup = (event) => {
    event.preventDefault();
    setPlayers({
      pitcher: "hendrky01",
      catcher: "contrwi01",
      first_base: "rizzoan01",
      second_base: "boteda01",
      third_base: "bryankr01",
      short_stop: "baezja01",
      left_fielder: "pederjo01",
      center_fielder: "happia01",
      right_fielder: "heywaja01",
    });
  };

  const updatePlayers = (e) => {
    setPlayers({
      ...players,
      [e.target.name]: e.target.value,
    });
  };

  const handleTypeaheadClick = (e) => {
    setPlayers({
      ...players,
      [e.currentTarget.getAttribute("name")]: e.currentTarget.getAttribute(
        "playerid"
      ),
    });
  };

  return (
    <div>
      {badSubmit ? (
        <div className={"alert--error"}>{submitError}</div>
      ) : (
        <div />
      )}
      <form onSubmit={postLineup}>
        {Object.entries(players).map(([key, value]) => {
          return (
            <div key={key}>
              <br />
              <div>
                <label>
                  {key}
                  <Typeahead
                    name={key}
                    value={value}
                    onChange={updatePlayers}
                    onSuggestionClick={handleTypeaheadClick}
                  />
                </label>
              </div>
            </div>
          );
        })}
        {submitting ? (
          <Loading />
        ) : (
          <>
            <button className={"button"} onClick={autoFillLineup}>
              Auto Fill Lineup
            </button>
            <input type={"submit"} value={"Save Lineup"} className={"button"} />
          </>
        )}
      </form>
    </div>
  );
};

export default LineupForm;
