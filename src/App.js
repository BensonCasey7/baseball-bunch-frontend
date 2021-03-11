import Home from "./pages/Home";
import RoutingTest from "./pages/RoutingTest";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/routing-test" exact component={RoutingTest} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
