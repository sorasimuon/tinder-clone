import React from "react";
import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/playground">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/new-account">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
