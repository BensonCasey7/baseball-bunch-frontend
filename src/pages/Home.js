import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={"page"}>
      <h1>Home</h1>
      <Link to={"/restricted"}>This page is behind a login wall</Link>
    </div>
  );
}

export default Home;
