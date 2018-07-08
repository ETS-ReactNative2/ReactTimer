import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Header from './components/header'
import audio from './media/audio.wav';
import Clock1 from './components/clock1';
import Reload1 from './components/btnr';

class App extends Component {

  state = {
    disp1: "Start task:",
    disp2: "End task:",
    disp3: "Task waiting...",
    button: false,
    bg: "bg-green",
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
    this.setState({});
  }
  reloadBtn() {
    window.location.reload();
  }

  timer = () => {
    this.setState({ bg: "gray" });
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    this.setState({ disp1: "Start task: " + h + ":" + m });
    var h2 = today.getHours() + 3;
    this.setState({ disp2: "End task: " + h2 + ":" + m });
    this.setState({ disp3: "Task running..." });
    this.setState({ bgd: "purple" });
    this.setState({ button: true });
    const c = () => { this.setState({ disp3: "Task finished!!" }); };
    const d = () => { this.setState({ bgd: "teal" }); }
    const e = () => {
      this.audio = new Audio(audio);
      this.audio.play();
    }
    // var tT = 3 * 60 * 60 * 1000;
    setTimeout(myTimer, 10800000);
    // setTimeout(myTimer, 6000);
    function myTimer() {
      c();
      d();
      e();
    }
  }

  render() {
    const {button, disp1, disp2, bgd, disp3, bg} = this.state;
    return (
      <div>
        <Header />
        <hr /><br />
        <Reload1 reloadBtn={this.reloadBtn} timer={this.timer}
          disabled={button}
          style={{ background: bg }} /><br />
        <Clock1 test={disp1} test2={disp2}
          test3={{ background: bgd }}
          test4={disp3} />
      </div>
    );
  }
}

export default App;

// document.body.style.backgroundColor = "lightgray";
// document.getElementById("disp3").style.backgroundColor = "purple";
// document.getElementById("button").disabled = true;
// <p>{this.state.time}</p>
// time: new Date().toLocaleTimeString(),
// time: new Date().toLocaleTimeString()
// <p>{this.state.disp1} </p><br />
// <p>{this.state.disp2} </p><br />