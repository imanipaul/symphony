import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      Symphony
      <Button type="primary">Test Button</Button>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
