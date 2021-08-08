import React from "react";
import { Route, Switch } from "react-router";
import { MainAppHOC } from "./hoc/MainAppHOC";
import HomePage from "./pages/home";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" render={() => <HomePage />} />
    </Switch>
  );
};

export default MainAppHOC(App);
