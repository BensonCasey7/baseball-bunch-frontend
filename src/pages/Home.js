import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>The Baseball Bunch</h1>
      <Link to="/routing-test">Routing Test</Link>
    </div>
  );
}

export default Home;
