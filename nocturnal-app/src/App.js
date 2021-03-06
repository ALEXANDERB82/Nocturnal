import React from "react";
import NavBar from "./components/NavBar";

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Library from "./components/Library";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/library" component={Library} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;