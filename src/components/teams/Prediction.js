import React, { useState, useEffect } from "react";
import Typeahead from "../players/Typeahead";
import positionAbbreviations from "../../utils/positionAbbreviations";

const Prediction = (props) => {
  const [prediction, setPrediction] = useState({});
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => {
    setLoaded(false);

    let requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch(
      `https://cs411baseball.web.illinois.edu/api/predict/${props.teamId}`,
      requestOptions
    ).then(async (response) => {
      if (response.status === 200) {
        const data = await response.json();
        setPrediction(data);
        setLoaded(true);
      }
    });
  };

  return (
    <>
      <h3>Is this a championship caliber team?</h3>
      <button onClick={handleClick}>Test your team</button>
      {loaded ? (
        <>
          {Object.entries(prediction).map(([key, value]) => {
            return (
              <div key={key}>
                According to {key}, we predict that{" "}
                {prediction[key]["predicted fantasy team name"]} will{" "}
                {prediction[key]["predicted to be champion?"] == "Yes"
                  ? ""
                  : "not"}{" "}
                be a champion with{" "}
                {(prediction[key]["accuracy"] * 100).toFixed(1)}% accuracy
              </div>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Prediction;
