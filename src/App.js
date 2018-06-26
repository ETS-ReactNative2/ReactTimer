import React, { Component } from 'react';
import './App.css';
import 'tachyons';

class App extends Component {


  render() {
    return (
      <div className="App">
        <body onload="startTime()">
            <h1>3h Timer</h1>
            <hr /><br />
            <button onclick="timer()" class="button" id="button">
            3 Hour Timer</button>
            <button onclick="undisableBtn()" class="buttonR">
            Reset</button><br />
            <p id="date"></p>
            <p id="hour"></p><br />
            <p id="disp1">Start task: </p><br />
            <p id="disp2">End task: </p><br />
            <p id="disp3">Task waiting...</p>
        </body>
      </div>
    );
  }
}

export default App;
