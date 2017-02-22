import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
require('codemirror/mode/javascript/javascript')
import debug from 'debug'
import jetpack from 'fs-jetpack'

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
    this.props.glEventHub.on('editor:save-active-file', this.saveFile.bind() )
  }
  componentWillUnmount() {
    this.props.glEventHub.off( 'editor:file-select', this.setUser );
  }

  componentDidMount() {
    this.loadFile()
  }

  componentWillUpdate(nextProps, nextState) {
    log('next:', nextState, 'current:', this.state)
    if(nextState.dirty) {
      this.props.glContainer.setTitle(`${nextState.file} *`)
    } else {
      this.props.glContainer.setTitle(nextState.file)
    }
  }

  loadFile(evt) {
    log('loadfile:', evt)
    const file = this.state.file
    if(file && jetpack.exists(file)) {
      jetpack.readAsync(file)
      .then(contents => {
        this.setState({code: contents, dirty: false, isUnsavedTitle: false})
        this.props.glContainer.setTitle(file)
      })
    }

  }
  saveFile() {
    const project = jetpack.cwd(PROJECT_DIRECTORY)
    project.writeAsync(this.state.file, this.state.code)
    .then( () => {
      log('saved file')
      this.props.glEventHub.emit('preview:refresh')
    })
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
