import React, { Component } from "react";
import "./App.css";
import "tachyons";
import Header from "./components/Header";
import Reload from "./components/Reload";
import Date1 from "./components/Date1";
import Clock2 from "./components/Clock2";
import Timer from "./components/Timer";
import DevBy from "./components/DevBy";
import Particles1 from "./components/Particles1";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="dib">
          <Reload />
          <Date1 />
          <Clock2 />
          <DevBy />
        </div>
        <div className="dib">
          <Timer />
        </div>
        <Particles1 />
      </div>
    );
  }
}

export default App;
