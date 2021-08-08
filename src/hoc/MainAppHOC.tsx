import React from "react";
import store from "../store/store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

export const MainAppHOC = (Component: React.FC) => (props: any) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </HashRouter>
  );
};
