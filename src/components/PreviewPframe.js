import React, {Component} from 'react'
import jetpack from 'fs-jetpack'
import {remote} from 'electron'
import debug from 'debug'
import {filter as fuzz} from 'fuzzaldrin'
import FileSelectorItem from './FileSelectorItem'
import Webview from 'react-electron-web-view'
import express from 'express'
import ENV from '../env'
import CommandRouter from '../routers/CommandRouter'

const app = remote.app;

export default class PreviewPframe extends Component {

  constructor(props) {
    super(props)
    this.state = {
      baseDir: ENV.PROJECT_DIRECTORY,
      serverReady: false,
      serverPort: null
    }
    this.server = null
    this.port = 8132
    this.frame = null
  }
  componentWillMount() {
    const server = express()
    server.use(express.static(ENV.PROJECT_DIRECTORY))
    this.server = server.listen(this.port, () => {
      console.log('PreviewPframe:', 'server started')
      this.setState({serverReady: true})
    })
    CommandRouter.register('preview:refresh', this.refresh)
    this.props.glContainer.setTitle('Live Preview')
  }
  componentWillUnmount() {
    this.server.close()
    CommandRouter.deregister('preview:refresh', this.refresh)
  }

  componentDidMount() {
    this.frame.view.addEventListener('dom-ready', () => {
      // this.frame.view.openDevTools()
    })

  }

  refresh() {
    this.frame.view.reload()
  }


  render() {
    const src = `http://localhost:${this.port}`
    return (
      <div className="PreviewPframe">
        <Webview src={src}
          ref={(frame) => this.frame = frame}
          nodeintegration
          disablewebsecurity
        />
      </div>
    )
  }
}
