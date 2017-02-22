import React, {Component} from 'react'
import jetpack from 'fs-jetpack'
import {remote} from 'electron'
import debug from 'debug'
import {filter as fuzz} from 'fuzzaldrin'
import FileSelectorItem from './FileSelectorItem'
import Webview from 'react-electron-web-view'
import express from 'express'

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
      console.log('PreviewPframe:', 'server started')
      this.setState({serverReady: true})
    })
    this.props.glEventHub.on('preview:refresh', () => this.refresh())
    this.props.glContainer.setTitle('Live Preview')
  }

  componentDidMount() {
    this.frame.view.addEventListener('dom-ready', () => {
      // this.frame.view.openDevTools()
    })
  }
  refresh() {
    this.frame.view.reload()
  }

  componentWillUnmount() {
    this.server.close()
  }
  render() {
    const src = `http://localhost:${this.port}`
    return (
      <div className="preview-pframe">
        <Webview src={src}
          ref={(frame) => this.frame = frame}
          nodeintegration
          disablewebsecurity
        />
      </div>
    )
  }
}
