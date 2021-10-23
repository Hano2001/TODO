import React, { useState, useEffect } from "react";
import { Switch, Route} from "react-router-dom";
import "./App.css";
import ListPage from "./pages/ListPage";
import HomePage from "./pages/HomePage";
import CreateListPage from "./pages/CreateListPage";
import NavBar from "./components/NavBar";

function App() {


  return (
    <div className="App">
      <NavBar/>
      
        
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route exact path="/listpage">
            <ListPage />
          </Route>
          <Route path="/createlist">
            <CreateListPage/>
          </Route>
        </Switch>
  
    </div>
  );
}

export default App;
