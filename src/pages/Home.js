import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={"page"}>
      <h1>Home</h1>
      <Link to={"/teams"}>My Fantasy teams</Link>
    </div>
  );
}

export default Home;
