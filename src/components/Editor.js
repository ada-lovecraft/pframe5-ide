import React from 'react';
import CodeMirror from 'react-codemirror';
require('codemirror/mode/javascript/javascript')


export default class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// Hello, World!',
      codemirrorOptions: {
        lineNumbers: true,
        theme: 'tomorrow-night-eighties'
      },
    };
  }

  handleCodeChange(c) {
    this.setState({ code: c });
  }

  render() {
    return (<CodeMirror
      value={this.state.code}
        language="javascript"
        options={this.state.codemirrorOptions}
        onChange={this.handleChange}
      />
    );
  }
}
