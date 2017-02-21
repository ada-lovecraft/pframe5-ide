// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import GoldenLayout from 'golden-layout'
import Editor from './components/Editor'
import Debugger from './components/Debug'

import debug from 'debug'
const log = debug('app:log')



var config = {
    content: [{
        type: 'row',
        content:[{
            type: 'react-component',
            component: 'editorComponent',
            props: { file: 'src/app.js' }
        },
        {
          type: 'component',
          componentName: 'testComponent',
          componentState: { label: 'C' }
        }]
    }]
};


let gl;

gl = new GoldenLayout(config, document.getElementById('workspace'))

gl.registerComponent('editorComponent', Editor)
gl.registerComponent( 'testComponent', function( container, componentState ){
    container.getElement().html( '<h2>' + componentState.label + '</h2>' );
});

gl.init()
