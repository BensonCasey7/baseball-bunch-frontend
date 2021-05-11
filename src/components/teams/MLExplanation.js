import React from "react";

const MLExplanation = (props) => {
  return (
    <div>
      <h4>{props.explanation.name}</h4>
      {props.explanation.detail}
    </div>
  );
};

export default MLExplanation;
