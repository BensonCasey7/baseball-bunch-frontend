import React from "react";
import { Link } from "react-router-dom";

import HitterSeasonsChart from "../components/players/HitterSeasonsChart";

const Home = (props) => {
  const yelichStats = [
    {
      batting_hr: "4",
      g: "62",
      h: "69",
      rbi: "16",
      year: "2013",
    },
    {
      batting_hr: "9",
      g: "144",
      h: "165",
      rbi: "54",
      year: "2014",
    },
    {
      batting_hr: "7",
      g: "126",
      h: "143",
      rbi: "44",
      year: "2015",
    },
    {
      batting_hr: "21",
      g: "155",
      h: "172",
      rbi: "98",
      year: "2016",
    },
    {
      batting_hr: "18",
      g: "156",
      h: "170",
      rbi: "81",
      year: "2017",
    },
    {
      batting_hr: "36",
      g: "147",
      h: "187",
      rbi: "110",
      year: "2018",
    },
    {
      batting_hr: "44",
      g: "130",
      h: "161",
      rbi: "97",
      year: "2019",
    },
  ];

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
              <HitterSeasonsChart data={yelichStats} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
