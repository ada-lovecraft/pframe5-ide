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
import layout from './layout.js'
import CommandRouter from './routers/CommandRouter'
import throttle from 'lodash.throttle'
import debug from 'debug'

const log = debug('app:log')

let gl;

gl = new GoldenLayout(layout)

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

//ReactDOM.render(<CommandPframe glEventHub={gl.eventHub}/>, document.getElementById('command-pframe'))
window.addEventListener('resize', throttle(() => {
  setTimeout(() => {
    log('resized!')
    CommandRouter.trigger('preview:refresh')
}, 300)
}), 500, {leading: false})
