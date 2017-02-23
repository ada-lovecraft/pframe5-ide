// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import GoldenLayout from 'golden-layout'
import EditorPframe from './components/EditorPframe'
import CommandPframe from './components/CommandPframe'
import PreviewPframe from './components/PreviewPframe'
import DebugPframe from './components/DebugPframe'
import Debugger from './components/Debug'
import Console from '@zillding/react-console'
import layout from '../data/layout.js'
import debug from 'debug'
const log = debug('app:log')

const PROJECT_DIRECTORY ='/Users/ada/github/pframe5-demo'
global.PROJECT_DIRECTORY = PROJECT_DIRECTORY





let gl;

gl = new GoldenLayout(config)

gl.registerComponent('editorComponent', EditorPframe)
gl.registerComponent('previewComponent', PreviewPframe)
gl.registerComponent('debugComponent', DebugPframe)
//gl.registerComponent('fileTreeComponent', FileTree)
gl.registerComponent( 'testComponent', function( container, componentState ){
    container.getElement().html( '<h2>' + componentState.label + '</h2>' );
});

gl.init()
document.addEventListener('keypress', evt => {
  log(evt)
})

window.refreshPreview = () => gl.eventHub.emit('preview:refresh')
window.saveFile = () => gl.eventHub.emit('editor:save-active-file')
window.log = (...msg) => gl.eventHub.emit('debugger:log', {message: msg})
//ReactDOM.render(<CommandPframe glEventHub={gl.eventHub}/>, document.getElementById('command-pframe'))
