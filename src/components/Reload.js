import React, { Component } from "react";

class Reload extends Component {
  reloadBtn() {
    window.location.reload();
  }
  render() {
    return (
      <div>
        <button onClick={this.reloadBtn} className="bg-green white pa2 dib" id="buttonR">
          Reload
        </button>
      </div>
    );
  }
}

export default Reload;
