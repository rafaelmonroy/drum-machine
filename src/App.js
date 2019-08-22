import React from "react";
import ReactFCCtest from "react-fcctest";

import cowbell1 from "./sounds/COWBELL1.mp3";
import crash1 from "./sounds/CRASH1.mp3";
import crash2 from "./sounds/CRASH2.mp3";
import crash3 from "./sounds/CRASH3.mp3";
import drum1 from "./sounds/Drum1.mp3";
import close1 from "./sounds/HHCLOSE1.mp3";
import close2 from "./sounds/HHCLOSE2.mp3";
import open2 from "./sounds/HHOPEN2.mp3";
import conga from "./sounds/HICONGA.mp3";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      soundName: "SOUND"
    };
  }

  power = event => {
    this.setState({
      power: event.target.checked,
      soundName: "SOUND"
    });
    let ids = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    if (this.state.power) {
      for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).muted = true;
      }
    } else {
      for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).muted = false;
      }
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  handleClick = event => {
    const { id } = event.target;
    switch (id) {
      case "drum1":
        document.getElementById("Q").play();
        this.setState({
          soundName: id
        });
        break;
      case "CRASH1":
        document.getElementById("W").play();
        this.setState({
          soundName: id
        });
        break;
      case "BELL1":
        document.getElementById("E").play();
        this.setState({
          soundName: id
        });
        break;
      case "CRASH2":
        document.getElementById("A").play();
        this.setState({
          soundName: id
        });
        break;
      case "CRASH3":
        document.getElementById("S").play();
        this.setState({
          soundName: id
        });
        break;
      case "CLOSE1":
        document.getElementById("D").play();
        this.setState({
          soundName: id
        });
        break;
      case "CLOSE2":
        document.getElementById("Z").play();
        this.setState({
          soundName: id
        });
        break;
      case "OPEN2":
        document.getElementById("X").play();
        this.setState({
          soundName: id
        });
        break;
      case "CONGA":
        document.getElementById("C").play();
        this.setState({
          soundName: id
        });
        break;
      default:
        console.log("try again");
    }
  };
  onKeyDown = event => {
    const { which } = event;
    switch (which) {
      case 81:
        document.getElementById("Q").play();
        this.setState({
          soundName: "drum1"
        });
        break;
      case 87:
        document.getElementById("W").play();
        this.setState({
          soundName: "CRASH1"
        });
        break;
      case 69:
        document.getElementById("E").play();
        this.setState({
          soundName: "BELL1"
        });
        break;
      case 65:
        document.getElementById("A").play();
        this.setState({
          soundName: "CRASH2"
        });
        break;
      case 83:
        document.getElementById("S").play();
        this.setState({
          soundName: "CRASH3"
        });
        break;
      case 68:
        document.getElementById("D").play();
        this.setState({
          soundName: "CLOSE1"
        });
        break;
      case 90:
        document.getElementById("Z").play();
        this.setState({
          soundName: "CLOSE2"
        });
        break;
      case 88:
        document.getElementById("X").play();
        this.setState({
          soundName: "OPEN2"
        });
        break;
      case 67:
        document.getElementById("C").play();
        this.setState({
          soundName: "CONGA"
        });
        break;
      default:
        console.log("wrong key");
    }
  };

  render() {
    return (
      <div className="site-container">
        <div id="drum-machine">
          <div className="drums">
            <button className="drum-pad" id="drum1" onClick={this.handleClick}>
              <audio src={drum1} className="clip" id="Q" />Q
            </button>
            <button className="drum-pad" id="CRASH1" onClick={this.handleClick}>
              <audio src={cowbell1} className="clip" id="W" />W
            </button>
            <button className="drum-pad" id="BELL1" onClick={this.handleClick}>
              <audio src={crash1} className="clip" id="E" />E
            </button>
            <button className="drum-pad" id="CRASH2" onClick={this.handleClick}>
              <audio src={crash2} className="clip" id="A" />A
            </button>
            <button className="drum-pad" id="CRASH3" onClick={this.handleClick}>
              <audio src={crash3} className="clip" id="S" />S
            </button>
            <button className="drum-pad" id="CLOSE1" onClick={this.handleClick}>
              <audio src={close1} className="clip" id="D" />D
            </button>
            <button className="drum-pad" id="CLOSE2" onClick={this.handleClick}>
              <audio src={close2} className="clip" id="Z" />Z
            </button>
            <button className="drum-pad" id="OPEN2" onClick={this.handleClick}>
              <audio src={open2} className="clip" id="X" />X
            </button>
            <button className="drum-pad" id="CONGA" onClick={this.handleClick}>
              <audio src={conga} className="clip" id="C" />C
            </button>
          </div>
          <div className="controls">
            <label className="switch">
              <input
                type="checkbox"
                onChange={this.power}
                checked={this.state.power}
              />
              <span className="slider" />
            </label>
            <div className="sound-name" id="display">
              <span>{this.state.soundName}</span>
            </div>
          </div>
        </div>
        <ReactFCCtest />
      </div>
    );
  }
}

export default App
