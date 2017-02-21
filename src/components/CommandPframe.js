import React, {Component} from 'react'
import jetpack from 'fs-jetpack'
import FileSelector from './FileSelector'
import debug from 'debug'

const log = ('CommandPframe:log')

export default class CommandPframe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      component: (<FileSelector/>)
    }
  }
  componentWillMount() {
    this.props.glEventHub.on('commander:show', this.selectComponent)
    
  }

  componentWillUnmount() {
    this.props.glEventHub.off( 'commander:show', this.selectComponent);
  }
  selectComponent(evt) {
    log('selecting component:', evt)
  }
  render() {


  return (
  <div className="CommandPframe">
    {this.state.component}
  </div>
)}
}
