import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { adjustSeasons } from "./Player";
import HitterSeasonsChart from "../components/players/HitterSeasonsChart";

const Home = (props) => {
  const [yelich, setYelich] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch(
      `https://cs411baseball.web.illinois.edu/api/player/yelicch01/stats`,
      requestOptions
    ).then(async (response) => {
      if (response.status === 200) {
        const data = await response.json();
        setYelich(adjustSeasons(data.seasons));
      }
    });
  }, []);

  return (
    <div className={"page"}>
      <div className={"home"}>
        <h1 className={"home__header"}>Baseball is hard.</h1>
        <h2 className={"home__subheader"}>
          Let The Baseball Bunch clear the way
        </h2>
        <div className={"grid-x"}>
          <div className={"cell large-5"}>
            <div className={"home__blurb"}>
              <p>
                Using a proprietary <b>machine learning algorithm</b> and 150
                years of baseball statistics, <b>The Baseball Bunch</b> can help
                you find the essence of a winning team.
              </p>
              <p>
                <b>Search</b> for the players that will make a difference and{" "}
                <b>create a team</b> that you believe has what it takes.
              </p>
              <p>
                When you're ready, <b>The Baseball Bunch</b> will tell you
                whether or not your team is ready to take home the title.
              </p>
              <div className={"home__cta"}>
                {props.signedIn ? (
                  <Link to="/teams" className={"button"}>
                    My Teams
                  </Link>
                ) : (
                  <Link to="/signin" className={"button"}>
                    Get Started
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className={"cell large-7"}>
            <div className={"home__chart"}>
              <HitterSeasonsChart data={yelich} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
