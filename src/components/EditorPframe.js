import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import CommandRouter from '../routers/CommandRouter'

require('codemirror/mode/javascript/javascript')
import debug from 'debug'
import jetpack from 'fs-jetpack'
import ENV from '../env'

const log = console.log

export default class EditorPframe extends Component {
  constructor(props) {
    super(props);
    log('props:', props)
    this.state = {
      code: '// Hello, World!',
      codemirrorOptions: {
        lineNumbers: true,
        theme: 'tomorrow-night-eighties'
      },
      file: props.file,
      dirty: false
    };
  }

  componentWillMount() {
    this.props.glEventHub.on('editor:file-select', this.loadFile )
    if(CommandRouter.register('core:save', this.saveFile)) {
      log('registered core:save')
    } else {
      log('failed to register core:save')
    }
  }
  componentWillUnmount() {
    this.props.glEventHub.off( 'editor:file-select', this.setUser );
    if(CommandRouter.deregister('core:save', this.saveFile)) {
      log('deregistered core:save')
    } else {
      log('failed to deregister core:save')
    }
  }

  componentDidMount() {
    this.loadFile()
  }

  componentWillUpdate(nextProps, nextState) {
    log('next:', nextState, 'current:', this.state)
    const tabTitle = nextState.file.match(/\S+\/(\S+)$/)[1]
    if(nextState.dirty) {
      this.props.glContainer.setTitle(`${tabTitle} *`)
    } else {
      this.props.glContainer.setTitle(tabTitle)
    }
  }

  loadFile(evt) {
    log('loadfile:', evt)
    const file = this.state.file
    if(file && jetpack.exists(file)) {
      jetpack.readAsync(file)
      .then(contents => {
        this.setState({code: contents, dirty: false, isUnsavedTitle: false})
        const tabTitle = file.match(/\S+\/(\S+)$/)[1]
        log('tabTitle:', tabTitle)
        this.props.glContainer.setTitle(tabTitle)
      })
    }

  }
  saveFile() {
    if(this.props.glContainer.tab.isActive) {
      const project = jetpack.cwd(ENV.PROJECT_DIRECTORY)
      project.writeAsync(this.state.file, this.state.code)
      .then( () => {
        log('saved file')
        this.setState({dirty: false})
        CommandRouter.trigger('preview:refresh')
      })
    }
  }
  handleCodeChange(c) {
    this.setState({ code: c});
    if(!this.state.dirty) {
      this.setState({dirty: true})
    }

  }


  render() {
    return (<CodeMirror
      value={this.state.code}
      language="javascript"
      options={this.state.codemirrorOptions}
      onChange={(code) => this.handleCodeChange(code)}
            />
    );
  }
}
