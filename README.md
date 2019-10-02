# react-keyboard-listener

> Keyboard event listener component for react js applications.

[![NPM](https://img.shields.io/npm/v/react-keyboard-listener.svg)](https://www.npmjs.com/package/react-keyboard-listener) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-keyboard-listener
```

## Usage

```jsx
import React, { Component } from "react";

import MyComponent from "react-keyboard-listener";

class Keyboard-Listener extends Component {
  onkeyDown = keyEvent => console.log(keyEvent);
  render() {
    return (
      <Keyboard-Listener onKeyDown={this.onKeyDown}>
        <span>Add your components here.</span>
      </Keyboard-Listener>
    );
  }
}
```
## Example Project 
https://github.com/soorajshankar/react-keyslistener/tree/master/example

## License

MIT © [Sooraj Sanker](https://github.com/soorajshankar)
