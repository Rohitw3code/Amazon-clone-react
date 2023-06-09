import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />        
        <Switch>
          <Route exact  path="/checkout"><Checkout /></Route>
          <Route exact  path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
