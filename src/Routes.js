import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import App from "./screens/home/App.js";

function Routes() {
  return (
    <HashRouter basename="/Focus">
      <Routes>
        <Route path="/" /> {<App/>}
      </Routes>
    </HashRouter>
  );
}

export default Routes;