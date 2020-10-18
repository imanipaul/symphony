import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Drink from "./views/Drink";

function App() {
  return (
    <div className="App">
      <h1>symphony</h1>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/drink/:id">
          <Drink />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
