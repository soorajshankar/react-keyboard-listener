import React, { Component } from "react";

import KeyListener from "react-keylistener";

import img from "./assets/keyboard-listener.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      lastKey: null
    };
  }
  onKeyDown = lastKey => {
    console.log(lastKey);
    this.setState({ lastKey });
  };
  render() {
    const { visible, lastKey } = this.state;
    return (
      <div>
        <div
          style={{
            height: 700,
            width: 500,
            margin: "auto",
            textAlign: "center"
          }}
        >
          {this.state.visible && (
            <KeyListener onKeyDown={this.onKeyDown}>
              <img height={500} width={500} src={img} />
              <span>Listening to Keyboard events.</span>
            </KeyListener>
          )}
          <button
            style={{ background: "#6c63ff", color: "white", margin: 20 }}
            onClick={() =>
              this.setState(({ visible }) => {
                return { visible: !visible };
              })
            }
          >
            <h1>{visible ? "Turn off Listener" : "Turn on Listener"}</h1>
          </button>
          <br />
          {lastKey && (
            <React.Fragment>
              <h2>{`Last Pressed Key :${lastKey.key}`}</h2>
              <h2>{`Last Pressed KeyCode :${lastKey.keyCode}`}</h2>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}
