import ENV from '../src/env'
const layout = {
    content: [{
        type: 'row',
        content:[{
            type: 'react-component',
            component: 'editorComponent',
            props: { file: `${ENV.PROJECT_DIRECTORY}/sketch.js` }
        },{
            type: 'column',

            content:[{
              type: 'react-component',
              component: 'previewComponent',
              title: 'Live Preview',
              props: { }
            }
            // {
            //   type: 'react-component',
            //   component: 'debugComponent',
            //   tile: 'Debugger',
            //   props: { }
            // }
          ]
          }]
    }]
}
export default layout
