import React from "react";

function Loading() {
  return (
    <div className={"loading"}>
      <div className="loading--ripple">
        <div />
        <div />
      </div>
      <div className="loading--ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loading;
