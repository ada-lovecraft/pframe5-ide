export default layout = {
    content: [{
        type: 'row',
        content:[{
            type: 'react-component',
            component: 'editorComponent',
            props: { file: `${PROJECT_DIRECTORY}/sketch.js` }
        },{
            type: 'column',

            content:[{
              type: 'react-component',
              component: 'previewComponent',
              title: 'Live Preview',
              props: { }
            },
            {
              type: 'react-component',
              component: 'debugComponent',
              tile: 'Debugger',
              props: { }
            }
          ]
          }]
    }]
}
