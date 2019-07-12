import React, { Component } from "react";

class Reload extends Component {
  reloadBtn() {
    window.location.reload();
  }
  render() {
    return (
      <div>
      <br />
        <button onClick={this.reloadBtn} className="bg-green white pa2" id="buttonR">
          Reload
        </button>
        <br />
      </div>
    );
  }
}

export default Reload;
