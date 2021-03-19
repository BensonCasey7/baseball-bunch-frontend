import Nav from "./components/shared/Nav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/stylesheets/App.scss";

function App() {
  return (
    <Router>
      <Nav />
      <div className={"page-wrapper"}>
        <div className={"page-wrapper__content"}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
