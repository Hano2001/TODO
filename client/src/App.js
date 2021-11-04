import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ListPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
