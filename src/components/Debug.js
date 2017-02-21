import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Debugger extends Component {
  render() {
    return (
      <h2>This is the debug module</h2>
    )
  }
}

Debugger.componentFactory = function(container, props) {
  ReactDOM.render(new Debugger(props), container)
}
