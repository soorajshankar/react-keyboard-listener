# Demo Project of react-keyboard-listener

## Usage

```jsx
import React, { Component } from "react";

import MyComponent from "react-keyboard-listener";

class KeyListener extends Component {
  onkeyDown = keyEvent => console.log(keyEvent);
  render() {
    return (
      <KeyListener onKeyDown={this.onKeyDown}>
        <span>Add your components here.</span>
      </KeyListener>
    );
  }
}
```