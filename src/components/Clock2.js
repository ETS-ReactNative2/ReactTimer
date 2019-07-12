import React, {Component} from 'react'

class Clock2 extends Component{
    constructor() {
        super();
        this.state = {
        }
      }
      componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({});
      }
    
    render(){
        return(
            <div>
                <p className="ma2">{new Date().toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock2;