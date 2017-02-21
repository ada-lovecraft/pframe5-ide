import React, {Component} from 'react'
import jetpack from 'fs-jetpack'
import debug from 'debug'
import {filter as fuzz} from 'fuzzaldrin'
import FileSelectorItem from './FileSelectorItem'
const log = debug('FileTree:log')

export default class FileSelector extends Component {
  constructor(props) {
    super(props)
    this.input = null
    this.state = {
      files: [],
      filter: '',
      selectedItem: 0,
      fileList: []
    }
  }

  componentDidMount() {
    this.findFiles()
    this.input.focus()
  }
  handleFilterChange(filter) {
    const fileList = fuzz(this.state.files, filter, {maxResults: 10})
    this.setState({filter, fileList, selectedItem: 0})
  }
  handleKeyPress(evt) {
    evt.stopPropagation()
    const keys = [13, , 27, 40, 38]
    const keycode = evt.keyCode
    log('keycode:', keycode)
    if(keys.includes(keycode)) {
      evt.preventDefault()
      const listSize = this.state.fileList.length
      let selectedItem = this.state.selectedItem
      switch(keycode) {
        case 13:
          log('selected file:', this.state.fileList[selectedItem])
          break;
        case 27:
          log('closing command pframe')
          this.props.glEventHub.emit('file-selector:close')
          break;
        case 40:
          selectedItem++
          if(selectedItem >= listSize) {
            selectedItem = listSize - 1
          }
          break;
        case 38:
          selectedItem--
          if(selectedItem < 0) {
            selectedItem = 0
          }
          break
      }
      this.setState({selectedItem})
    }
  }
  findFiles() {
    let projectDir = jetpack.cwd(PROJECT_DIRECTORY)
    projectDir.findAsync('.', { matching:['*.js','*.html','!node_modules/**']})
    .then(files => {
      this.setState({files})
    })
  }
  render() {


    return (
      <div className="file-selector">
        <input value={this.state.filter}
          onChange={(evt) => this.handleFilterChange(evt.target.value)}
          onKeyDown={(evt) => this.handleKeyPress(evt)}
          placeholder="Open File"
          ref={(input) => this.input = input}
        />
        <ul>
          {this.state.fileList.map((file,i) => {
            const props = {key: i, fileName: file, selected: i === this.state.selectedItem}
            return (<FileSelectorItem {...props} />)
          })}
        </ul>
      </div>
    )
  }
}
