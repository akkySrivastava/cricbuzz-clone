import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./components/News";
import GetMatches from "./components/GetMatches";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={GetMatches} />
          <Route exact path="/sportsnews" component={News} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
