import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import Index from "./index";

export default props => (
  <Provider store={props.store}>
    <HashRouter>
      <Index />
    </HashRouter>
  </Provider>
);
