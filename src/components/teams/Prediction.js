import React, { useState } from "react";
import Loading from "../shared/Loading";
import LineupForm from "./LineupForm";
import BaseballDiamond from "../../assets/images/baseball-diamond.png";
import LineupPlayer from "./LineupPlayer";
import MLMetrics from "./MLMetrics";

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
        if (key === "fantasy_team_stats") {
          return;
        }
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

  const toSentence = (words) => {
    if (words.length === 1) {
      return words[0];
    }
    return (
      words.slice(0, words.length - 1).join(", ") + " and " + words.slice(-1)
    );
  };

  const predictionSummary = () => {
    if (!prediction) {
      return "";
    } else {
      const aggregate = predictionAggregate();
      const yesList = toSentence(aggregate.yes);
      const noList = toSentence(aggregate.no);
      switch (predictionAggregate().yes.length) {
        case 0:
          return (
            <>
              Our <b>{noList}</b> models all predict that this team is not up to
              the task.
            </>
          );
        case 1:
          return (
            <>
              Our <b>{noList}</b> models predict that this team is not ready for
              a championship. However, according to our <b>{yesList}</b> model,
              this team has a shot.
            </>
          );
        case 2:
          return (
            <>
              Our <b>{yesList}</b> models predict that this is a championship
              level team. However, our <b>{noList}</b> model does not.
            </>
          );
        default:
          return (
            <>
              Our <b>{yesList}</b> models all predict that this is a
              championship level team.
            </>
          );
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
              <div className={"prediction__summary"}>{predictionSummary()}</div>
              <MLMetrics prediction={prediction} />
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
