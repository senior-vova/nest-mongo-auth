import React from "react";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import HomePage from "./pages/home";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" render={() => <HomePage />} />
      </Switch>
    </HashRouter>
  );
};

export default App;
