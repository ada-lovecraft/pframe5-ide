import React, {Component} from 'react'
import jetpack from 'fs-jetpack'
import FileSelector from './FileSelector'
import debug from 'debug'

const log = ('DebugPframe:log')

export default class DebugPframe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      log: [],
    }
  }
  componentWillMount() {
    this.props.glContainer.setTitle('Live Debugger')
  }
  render() {
    return (
      <div className="CommandPframe">
        {this.state.component}
      </div>
    )
  }
}
