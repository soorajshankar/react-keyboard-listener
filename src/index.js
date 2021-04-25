import React, { Component } from 'react'
import PropTypes from 'prop-types'

class KeyListener extends Component {
  static propTypes = {
    onKeyDown: PropTypes.func
  };
  onKeyDown = event => {
    const keyName = event.key

    if (keyName === 'Control') {
      // do not alert when only Control key is pressed.
      return
    }
    if (event.ctrlKey || event.altKey || event.shiftKey) {
      // Even though event.key is not 'Control' (e.g., 'a' is pressed),
      // event.ctrlKey may be true if Ctrl key is pressed at the same time.
      this.props.onKeyDown(event)
    } else {
      this.props.onKeyDown(event)
    }
  };
  onKeyUp = event => {
    const keyName = event.key
    this.props.onKeyDown(event)

    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    if (keyName === 'Control') {
    }
  };
  componentDidMount = () => {
    document.addEventListener('keydown', this.onKeyDown, false)
    document.addEventListener('keyup', this.onKeyUp, false)
  };
  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.onKeyDown, false)
    document.removeEventListener('keyup', this.onKeyUp, false)
  };

  render() {
    const { children = '' } = this.props
    return <div>{children}</div>
  }
}

export default KeyListener
