import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import './audio.wav';

class App extends Component {

  state = {
    time: new Date().toLocaleTimeString(),
    disp1: "Start task:",
    disp2: "End task:",
    disp3: "Task waiting...",
    button: false,
    bg: "#4CAF50",
    bgd: "#75507B"
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

  timer = () => {
    // document.getElementById("button").style.backgroundColor = "gray";
    this.setState({ bg: "gray" });
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    this.setState({ disp1: "Start task: " + h + ":" + m });
    var h2 = today.getHours() + 3;
    this.setState({ disp2: "End task: " + h2 + ":" + m });
    this.setState({ disp3: "Task running..." });
    // document.getElementById("disp3").style.backgroundColor = "purple";
    this.setState({ bgd: "purple" });
    // document.getElementById("button").disabled = true;
    this.setState({ button: true });
    const c = () => { this.setState({ disp3: "Task finished!!" }); };
    const d = () => { this.setState({ bgd: "teal" }); }
    const e = () => {
      // var audio = new Audio('./audio.wav');
      // var audio = document.getElementById("audio.wav");
      // console.log(audio.toString());ser
      // audio.play();
    }
    // var tT = 3 * 60 * 60 * 1000;
    // setTimeout(myTimer, 10800000);
    setTimeout(myTimer, 6000);
    function myTimer() {
      c();
      // document.getElementById("disp3").style.backgroundColor = "teal";
      d();
      e();
      // var audio = new Audio('The Endeavor Begins.mp3');
      // console.log(audio.toString());
      // audio.play();
    }
  }
  render() {
    return (
      <div className="App">
        <h1>3h Timer</h1>
        <hr /><br />
        <button onClick={this.timer} id="button"
          disabled={this.state.button} style={{ background: this.state.bg }}>
          3 Hour Timer</button>
        <button onClick={this.reloadBtn} id="buttonR">
          Reload</button><br />
        <p>{new Date().toDateString()}</p>
        <p>{this.state.time}</p><br />
        <p>{this.state.disp1} </p><br />
        <p id="disp2">{this.state.disp2} </p><br />
        <p id="disp3" style={{ background: this.state.bgd }}>
          {this.state.disp3}</p>

        <audio controls
          src="audio.wav" type="audio/mpeg" />

      </div>
    );
  }
}

export default App;
