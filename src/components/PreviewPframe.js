import React, {Component} from 'react'
import jetpack from 'fs-jetpack'
import {remote} from 'electron'
import debug from 'debug'
import {filter as fuzz} from 'fuzzaldrin'
import FileSelectorItem from './FileSelectorItem'
import express from 'express'
const log = debug('PreviewPframe:log')
const app = remote.app;

export default class PreviewPframe extends Component {

  constructor(props) {
    super(props)
    this.state = {
      baseDir: PROJECT_DIRECTORY,
      serverReady: false,
      serverPort: null
    }
    this.server = null
    this.port = 8132
    this.frame = null
  }
  componentWillMount() {
    const server = express()
    server.use(express.static(PROJECT_DIRECTORY))
    this.server = server.listen(this.port, () => {
      log('server started:', this.port)
      this.setState({serverReady: true})
    })
    this.props.glEventHub.on('preview:refresh', () => this.refresh())
    this.props.glContainer.setTitle('Live Preview')
  }

  refresh() {
    this.frame.reload()
  }

  componentWillUnmount() {
    this.server.close()
  }
  render() {
    const src = `http://localhost:${this.port}`
    return (
      <div className="preview-pframe">
        <webview src={src} ref={(frame) => this.frame = frame}
        />
      </div>
    )
  }
}
