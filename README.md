# react-keylistener

> Keyboard event listener component for react js applications.

[![NPM](https://img.shields.io/npm/v/react-keylistener.svg)](https://www.npmjs.com/package/react-keylistener) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-keylistener
```

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
## Example Project 
https://github.com/soorajshankar/react-keyslistener/tree/master/example

## License

MIT © [Sooraj Sanker](https://github.com/soorajshankar)
