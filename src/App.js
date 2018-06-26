import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import './The Endeavor Begins.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  reloadBtn() {
    window.location.reload();
  }

  timer() {

    document.getElementById("button").style.backgroundColor = "gray";
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();

    document.getElementById('disp1').innerHTML = "Start task: " + h + ":" + m;
    var h2 = today.getHours() + 3;
    document.getElementById('disp2').innerHTML = "End task: " + h2 + ":" + m;
    document.getElementById("disp3").innerHTML = "Task running...";
    document.getElementById("disp3").style.backgroundColor = "purple";
    document.getElementById("button").disabled = true;
    
    // var tT = 3 * 60 * 60 * 1000;
    // setTimeout(myTimer, 10800000);
    setTimeout(myTimer, 6000);

    function myTimer() {
      document.getElementById("disp3").innerHTML = "Task finished!!";
      document.getElementById("disp3").style.backgroundColor = "teal";
      var audio = new Audio('The Endeavor Begins.mp3');
      console.log(audio.toString());
      // audio.play();
    }
  }

  render() {
    return (
      <div className="App">
        <h1>3h Timer</h1>
        <hr /><br />
        <button onClick={this.timer} id="button">
          3 Hour Timer</button>
        <button onClick={this.reloadBtn} id="buttonR">
          Reload</button><br />
        <p>{new Date().toDateString()}</p>
        <p>{this.state.time}</p><br />
        <p id="disp1">Start task: </p><br />
        <p id="disp2">End task: </p><br />
        <p id="disp3">Task waiting...</p>
      </div>
    );
  }
}

export default App;
