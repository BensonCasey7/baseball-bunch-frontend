import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={"page"}>
      <h1>404 Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFound;
