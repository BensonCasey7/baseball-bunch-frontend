import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Loading from "../../components/shared/Loading";
import Typeahead from "../players/Typeahead";
import positionAbbreviations from "../../utils/positionAbbreviations";
import BaseballDiamond from "../../assets/images/baseball-diamond.png";

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
      pitcher: "degroja01",
      catcher: "grandya01",
      first_base: "freemfr01",
      second_base: "altuvjo01",
      third_base: "arenano01",
      short_stop: "storytr01",
      left_fielder: "sotoju01",
      center_fielder: "troutmi01",
      right_fielder: "yelicch01",
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
    <>
      {badSubmit ? <div className={"alert--error"}>{submitError}</div> : <></>}
      <form
        onSubmit={postLineup}
        className={"team-field"}
        style={{
          backgroundImage: `url(${BaseballDiamond})`,
        }}
      >
        {Object.entries(players).map(([key, value]) => {
          return (
            <div
              key={key}
              className={`team-field__player team-field__player--${key.replace(
                "_",
                "-"
              )}`}
            >
              <label className={"lineup-player__form"}>
                <Typeahead
                  name={key}
                  value={value}
                  onChange={updatePlayers}
                  onSuggestionClick={handleTypeaheadClick}
                  position={positionAbbreviations[key]}
                />
              </label>
            </div>
          );
        })}
        {submitting ? (
          <Loading />
        ) : (
          <div className={"team-field__form-actions"}>
            <button className={"button"} onClick={autoFillLineup}>
              Suggest Lineup
            </button>
            <input type={"submit"} value={"Save Lineup"} className={"button"} />
          </div>
        )}
      </form>
    </>
  );
};

export default LineupForm;
