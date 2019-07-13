import React, { Component } from 'react'
import Particles from "react-particles-js";

class Particles1 extends Component {
    render() {
        return (
            <div>
                <Particles className="particles" params={partOptions} />
            </div>
        )
    }
}
const partOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};

export default Particles1;