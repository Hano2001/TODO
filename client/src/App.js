import React, { useState, useEffect } from "react";
import { Switch, Route} from "react-router-dom";
import "./App.css";
import ListPage from "./pages/ListPage";
import HomePage from "./pages/HomePage";

function App() {


  return (
    <div className="App">
      <h1>TODO START</h1>
      
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route exact path="/listpage">
            <ListPage />
          </Route>
        </Switch>
  
    </div>
  );
}

export default App;
