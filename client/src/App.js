import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import { ContextInfo } from "./contexts/ContextInfo";
import ListPage from "./pages/ListPage";
import HomePage from "./pages/HomePage";

function App() {
  // const history = useHistory();
  // useEffect(() => {
  //   history.push("/home");
  // }, []);

  const [listData, setlistData] = useState({});

  const contextValues = {
    listData,
    setlistData,
  };

  return (
    <div className="App">
      <h1>TODO START</h1>
      <ContextInfo.Provider value={contextValues}>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route exact path="/listpage">
            <ListPage />
          </Route>
        </Switch>
      </ContextInfo.Provider>
    </div>
  );
}

export default App;
