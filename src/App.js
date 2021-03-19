import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/shared/Nav";
import Stage3 from "./components/shared/Stage3";
import Home from "./pages/Home";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import "./assets/stylesheets/App.scss";

function App() {
  return (
    <Router>
      <Nav />
      <div className={"page-wrapper"}>
        <div className={"page-wrapper__content"}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" children={<Search />} />
            <Route component={NotFound} />
          </Switch>
          <Stage3 />
        </div>
      </div>
    </Router>
  );
}

export default App;
