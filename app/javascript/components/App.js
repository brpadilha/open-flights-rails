import React from "react";
import { Switch, Route } from "react-router-dom";

import Airlines from "./Airlines/index";
import Airline from "./Airline/index";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Airlines} />
      <Route exact path="/airlines/:slug" component={Airline} />
    </Switch>
  );
}
