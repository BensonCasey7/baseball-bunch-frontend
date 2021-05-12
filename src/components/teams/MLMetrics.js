import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import MLExplanation from "./MLExplanation";
import MLTable from "./MLTable";
import PredictionBarChart from "./PredictionBarChart";

const MLMetrics = (props) => {
  const [showTable, setShowTable] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const methodsRows = [
    { ...props.prediction.GaussianNB, ...{ name: "GaussianNB" } },
    { ...props.prediction.KNeighbors, ...{ name: "KNeighbors" } },
    { ...props.prediction.LinearSVC, ...{ name: "LinearSVC" } },
  ];

  const methodsStructure = {
    name: "Method",
    "predicted to be champion?": "Champion?",
    accuracy: "Accuracy",
    f1: "F1",
    f2: "F2",
    "false positives": "False Positives",
    false_negatives: "False Negatives",
    precision: "Precision",
    recall: "Recall",
    "total predictions": "Total Predictions",
    "true negatives": "True Negatives",
    "true positives": "True Positives",
  };

  return (
    <>
      {showTable ? (
        <div
          className={"prediction__action"}
          onClick={() => {
            setShowTable(false);
          }}
        >
          Hide Details <BsFillCaretUpFill />
        </div>
      ) : (
        <div
          className={"prediction__action"}
          onClick={() => {
            setShowTable(true);
          }}
        >
          See More Detail <BsFillCaretDownFill />
        </div>
      )}
      {showTable ? (
        <>
          <div style={{ width: "100%", height: "300px" }}>
            <PredictionBarChart
              predictionStats={props.prediction.fantasy_team_stats}
            />
          </div>
          <MLTable structure={methodsStructure} rows={methodsRows} />

          <div className={"prediction__explanations"}>
            {showExplanation ? (
              <div
                className={"prediction__action"}
                onClick={() => {
                  setShowExplanation(false);
                }}
              >
                Hide <BsFillCaretUpFill />
              </div>
            ) : (
              <div
                className={"prediction__action"}
                onClick={() => {
                  setShowExplanation(true);
                }}
              >
                Read More <BsFillCaretDownFill />
              </div>
            )}
            {showExplanation ? (
              <div>
                {explanations().map((explanation) => {
                  return <MLExplanation explanation={explanation} />;
                })}
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const explanations = () => {
  return [
    {
      name: "Gaussian Naive Bayes",
      detail:
        "A supervised classifier and it is naïve in the sense that it assumes all the features in a class are independent to each other. It considers all the properties i.e. baseball stats in this case independently contribute to the probability of team lifting championship or not. Gaussian Naive Bayes algorithm is a special type of NB algorithm where the assumption is that all the features are following a gaussian distribution i.e, normal distribution.",
    },
    {
      name: "K Nearest Neighbor",
      detail:
        "A simple supervised learning algorithm that implements learning based on the k nearest neighbors. It classifies a datapoint that needs to be predicted by finding the k closest neighbor to the datapoint. Each neighbor votes for their class and the majority of the closest votes is taken as the prediction for the datapoint. If the input performance stat of the team is closer to that of datapoints belonging to champ class, then the model predicts that like their neighbors the input team is likely to be a champion.",
    },
    {
      name: "Linear SVC",
      detail:
        "A discriminative supervised classifier that separates data points using a hyperplane with the optimal margin. It constructs a hyperplane in multidimensional space to separate different classes from the training data set. The core idea of SVC is to find a maximum marginal hyperplane (MMH) that optimally divides the given dataset into multiple classes. The algorithm can then classify new data points based on the hyperplane. The algorithm studies all the training data in a multi-dimensional space and comes with a hyperplane for a decision boundary. It then takes the datapoints i.e. performance stats of baseball team drafted by the user and predicts the likely class label whether team is going to be champion or not based on the decision boundary evaluated.",
    },
  ];
};

export default MLMetrics;
