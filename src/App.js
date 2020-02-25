import React, { Component } from "react";
import "./App.css";
import { Statistic, Button, Header } from "semantic-ui-react";

import ScreenHeader from './components/ScreenHeader'

import MatchScreen from './components/MatchScreen'

function App() {
  return (
    <div className="App">
      <ScreenHeader />
      <MatchScreen />
      
    </div>
  );
}

export default App;



