import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/shared/Nav";
import Stage3 from "./components/shared/Stage3";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Player from "./pages/Player";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Restricted from "./pages/Restricted";
import FantasyTeam from "./pages/FantasyTeam";
import NotFound from "./pages/NotFound";
import "./assets/stylesheets/App.scss";

function App() {
  const [signedIn, setSignedIn] = useState(!!localStorage.getItem("token"));

  return (
    <Router>
      <Nav signedIn={signedIn} setSignedIn={setSignedIn} />
      <div className={"page-wrapper"}>
        <div className={"page-wrapper__content"}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/signin"
              exact
              children={
                <SignIn signedIn={signedIn} setSignedIn={setSignedIn} />
              }
            />
            <Route
              path="/signup"
              exact
              children={
                <SignUp signedIn={signedIn} setSignedIn={setSignedIn} />
              }
            />
            <Route
              path="/restricted"
              exact
              children={<Restricted signedIn={signedIn} />}
            />
            <Route
              path="/my-team"
              exact
              children={<FantasyTeam signedIn={signedIn} />}
            />
            <Route path="/search" children={<Search />} />
            <Route path="/players/:id" children={<Player />} />
            <Route component={NotFound} />
          </Switch>
          <Stage3 />
        </div>
      </div>
    </Router>
  );
}

export default App;
