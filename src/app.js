// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
const GoldenLayout = nodeRequire('golden-layout')

var config = {
    content: [{
        type: 'row',
        content:[{
            type: 'component',
            componentName: 'testComponent',
            componentState: { label: 'A' }
        },{
            type: 'column',
            content:[{
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'B' }
            },{
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'C' }
            }]
        }]
    }]
};

let gl;

gl = new GoldenLayout(config, document.getElementById('workspace'))
gl.registerComponent( 'testComponent', function( container, componentState ){
    container.getElement().html( '<h2>' + componentState.label + '</h2>' );
});
gl.init()
