import React, { Component } from "react";
import "./App.css";
import "tachyons";
import Header from "./components/Header";
import Reload from "./components/Reload";
import Date1 from "./components/Date1";
import Clock2 from "./components/Clock2";
import Timer from "./components/Timer";

class App extends Component {
  render() {
    return (
      <div>
        <Header /><hr /><br />
        <Reload /> <br />
        <Date1 /> <br />
        <Clock2 /><br />
        <Timer />
      </div>
    );
  }
}

export default App;
