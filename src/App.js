import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <h1>Symphony</h1>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
