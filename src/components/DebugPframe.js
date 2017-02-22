import React, {Component} from 'react'
import {Value, ValueList} from 'react-object'
import {injectRender} from 'console-board'
import debug from 'debug'

const log = ('DebugPframe:log')
let msgId = 0;
const parse = msg => JSON.parse(msg)
export default class DebugPframe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }


  render() {
    return (
      <div className="DebugPframe">
        //{injectRender({ toggleByTouch: false, showOnInit: true, showInput: true })}
      </div>
    )
  }
}
