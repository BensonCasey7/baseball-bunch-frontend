import React, { useState } from "react";
import Loading from "../shared/Loading";
import LineupForm from "./LineupForm";
import BaseballDiamond from "../../assets/images/baseball-diamond.png";
import LineupPlayer from "./LineupPlayer";

const Prediction = (props) => {
  const [prediction, setPrediction] = useState(undefined);
  const [loaded, setLoaded] = useState(true);

  const handleClick = () => {
    setLoaded(false);
    setPrediction(undefined);

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

  const predictionAggregate = () => {
    let aggregate = { yes: [], no: [] };
    if (!prediction) {
      return aggregate;
    } else {
      Object.entries(prediction).forEach(([key, value]) => {
        if (prediction[key]["predicted to be champion?"] === "Yes") {
          aggregate.yes = aggregate.yes.concat(key);
        } else {
          aggregate.no = aggregate.no.concat(key);
        }
      });
      return aggregate;
    }
  };

  const predictionHeader = () => {
    if (!prediction) {
      return "";
    } else {
      switch (predictionAggregate().yes.length) {
        case 0:
          return "This team could use some work";
        case 1:
          return "This team's got an outside shot";
        case 2:
          return "Looking good";
        default:
          return "That's a great team you've got there";
      }
    }
  };

  const predictionSummary = () => {
    if (!prediction) {
      return "";
    } else {
      const aggregate = predictionAggregate();
      const yesList =
        aggregate.yes.slice(0, aggregate.yes.length - 1).join(", ") +
        " and " +
        aggregate.yes.slice(-1);
      const noList =
        aggregate.no.slice(0, aggregate.no.length - 1).join(", ") +
        " and " +
        aggregate.no.slice(-1);
      switch (predictionAggregate().yes.length) {
        case 0:
          return `${noList} all predict that this team is not up to the task.`;
        case 1:
          return `${noList} predict that this team is not ready for a championship. However, according to ${yesList}, this team has a shot.`;
        case 2:
          return `${yesList} predict that this is a championship level team. However, ${noList} does not.`;
        default:
          return `${yesList} all predict that this is a championship level team.`;
      }
    }
  };

  return (
    <>
      {props.noLineup ? (
        <></>
      ) : (
        <>
          <h3>Is this a championship caliber team?</h3>
          <button onClick={handleClick}>Test your team</button>
          {prediction ? (
            <>
              <h2>{predictionHeader()}</h2>
              <div>{predictionSummary()}</div>
            </>
          ) : (
            <>
              {loaded ? (
                <></>
              ) : (
                <>
                  <Loading />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Prediction;
