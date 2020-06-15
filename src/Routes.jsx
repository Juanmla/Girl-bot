import React from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Chat from "./pages/Chat";
import Home from "./pages/Home";

const Routes = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
};

export default Routes;
