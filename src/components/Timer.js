import React, { Component } from 'react'
import audio from "../media/audio.wav";

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            startTask: "Start task:",
            endTask: "End task:",
            waitTask: "Task waiting...",
            btn3ht: false,
            GreenB: "bg-green",
            GrayB: "#75507B"
        };
    }
    timer = () => {
        this.setState({ GreenB: "gray" });
        const today = new Date();
        const h = today.getHours();
        const m = today.getMinutes();
        this.setState({ startTask: "Start task: " + h + ":" + m });
        var h2 = today.getHours() + 3;
        this.setState({ endTask: "End task: " + h2 + ":" + m });
        this.setState({ waitTask: "Task running..." });
        this.setState({ GrayB: "purple" });
        this.setState({ btn3ht: true });
        const c = () => {
            this.setState({ waitTask: "Task finished!!" });
        };
        const d = () => {
            this.setState({ GrayB: "teal" });
        };
        const e = () => {
            this.audio = new Audio(audio);
            this.audio.play();
        };
        // var tT = 3 * 60 * 60 * 1000;
        setTimeout(myTimer, 10800000);
        // setTimeout(myTimer, 6000);
        function myTimer() {
            c();
            d();
            e();
        }
    };
    render() {
        const { btn3ht, startTask, endTask, GrayB, waitTask, GreenB } = this.state;
        return (
            <div>               
                <button onClick={this.timer} className="bg-green" id="button"
                    disabled={btn3ht} style={{ background: GreenB }}> 
                    3 Hour Timer
                 </button>
                 
                <br />
                <p className = "">{startTask} </p><br />
                <p className = "">{endTask} </p><br />
                <p className = "" style={{ background: GrayB }}>{waitTask}</p>
            </div>
        )
    }
}

export default Timer;