(function () {'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var GoldenLayout = _interopDefault(require('golden-layout'));
var React$1 = require('react');
var React$1__default = _interopDefault(React$1);
var CodeMirror = _interopDefault(require('react-codemirror'));
var debug = _interopDefault(require('debug'));
var jetpack = _interopDefault(require('fs-jetpack'));
var fuzzaldrin = require('fuzzaldrin');
require('electron');
var Webview = _interopDefault(require('react-electron-web-view'));
var express = _interopDefault(require('express'));
require('react-object');
var consoleBoard = require('console-board');
var ReactDOM = _interopDefault(require('react-dom'));
var _zillding_reactConsole = _interopDefault(require('@zillding/react-console'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

require('codemirror/mode/javascript/javascript');
var log$1 = console.log;

var EditorPframe = function (_Component) {
  inherits(EditorPframe, _Component);

  function EditorPframe(props) {
    classCallCheck(this, EditorPframe);

    var _this = possibleConstructorReturn(this, (EditorPframe.__proto__ || Object.getPrototypeOf(EditorPframe)).call(this, props));

    log$1('props:', props);
    _this.state = {
      code: '// Hello, World!',
      codemirrorOptions: {
        lineNumbers: true,
        theme: 'tomorrow-night-eighties'
      },
      file: props.file,
      dirty: false
    };
    return _this;
  }

  createClass(EditorPframe, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.glEventHub.on('editor:file-select', this.loadFile);
      this.props.glEventHub.on('editor:save-active-file', this.saveFile.bind());
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.glEventHub.off('editor:file-select', this.setUser);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadFile();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      log$1('next:', nextState, 'current:', this.state);
      if (nextState.dirty) {
        this.props.glContainer.setTitle(nextState.file + ' *');
      } else {
        this.props.glContainer.setTitle(nextState.file);
      }
    }
  }, {
    key: 'loadFile',
    value: function loadFile(evt) {
      var _this2 = this;

      log$1('loadfile:', evt);
      var file = this.state.file;
      if (file && jetpack.exists(file)) {
        jetpack.readAsync(file).then(function (contents) {
          _this2.setState({ code: contents, dirty: false, isUnsavedTitle: false });
          _this2.props.glContainer.setTitle(file);
        });
      }
    }
  }, {
    key: 'saveFile',
    value: function saveFile() {
      var _this3 = this;

      var project = jetpack.cwd(PROJECT_DIRECTORY);
      project.writeAsync(this.state.file, this.state.code).then(function () {
        log$1('saved file');
        _this3.props.glEventHub.emit('preview:refresh');
      });
    }
  }, {
    key: 'handleCodeChange',
    value: function handleCodeChange(c) {
      this.setState({ code: c });
      if (!this.state.dirty) {
        this.setState({ dirty: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React$1__default.createElement(CodeMirror, {
        value: this.state.code,
        language: 'javascript',
        options: this.state.codemirrorOptions,
        onChange: function onChange(code) {
          return _this4.handleCodeChange(code);
        }
      });
    }
  }]);
  return EditorPframe;
}(React$1.Component);

var log$4 = debug('FileSelectorItem:log');
function FileSelectorItem(props) {
  var className = 'file-selector-item ' + (props.selected && 'selected');
  return React.createElement(
    'li',
    { className: className },
    props.fileName
  );
}

var log$3 = debug('FileTree:log');

var FileSelector = function (_Component) {
  inherits(FileSelector, _Component);

  function FileSelector(props) {
    classCallCheck(this, FileSelector);

    var _this = possibleConstructorReturn(this, (FileSelector.__proto__ || Object.getPrototypeOf(FileSelector)).call(this, props));

    _this.input = null;
    _this.state = {
      files: [],
      filter: '',
      selectedItem: 0,
      fileList: []
    };
    return _this;
  }

  createClass(FileSelector, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.findFiles();
      this.input.focus();
    }
  }, {
    key: 'handleFilterChange',
    value: function handleFilterChange(filter$$1) {
      var fileList = fuzzaldrin.filter(this.state.files, filter$$1, { maxResults: 10 });
      this.setState({ filter: filter$$1, fileList: fileList, selectedItem: 0 });
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(evt) {
      evt.stopPropagation();
      var keys = [13,, 27, 40, 38];
      var keycode = evt.keyCode;
      log$3('keycode:', keycode);
      if (keys.includes(keycode)) {
        evt.preventDefault();
        var listSize = this.state.fileList.length;
        var selectedItem = this.state.selectedItem;
        switch (keycode) {
          case 13:
            log$3('selected file:', this.state.fileList[selectedItem]);
            break;
          case 27:
            log$3('closing command pframe');
            this.props.glEventHub.emit('file-selector:close');
            break;
          case 40:
            selectedItem++;
            if (selectedItem >= listSize) {
              selectedItem = listSize - 1;
            }
            break;
          case 38:
            selectedItem--;
            if (selectedItem < 0) {
              selectedItem = 0;
            }
            break;
        }
        this.setState({ selectedItem: selectedItem });
      }
    }
  }, {
    key: 'findFiles',
    value: function findFiles() {
      var _this2 = this;

      var projectDir = jetpack.cwd(PROJECT_DIRECTORY);
      projectDir.findAsync('.', { matching: ['*.js', '*.html', '!node_modules/**'] }).then(function (files) {
        _this2.setState({ files: files });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React$1__default.createElement(
        'div',
        { className: 'file-selector' },
        React$1__default.createElement('input', { value: this.state.filter,
          onChange: function onChange(evt) {
            return _this3.handleFilterChange(evt.target.value);
          },
          onKeyDown: function onKeyDown(evt) {
            return _this3.handleKeyPress(evt);
          },
          placeholder: 'Open File',
          ref: function ref(input) {
            return _this3.input = input;
          }
        }),
        React$1__default.createElement(
          'ul',
          null,
          this.state.fileList.map(function (file, i) {
            var props = { key: i, fileName: file, selected: i === _this3.state.selectedItem };
            return React$1__default.createElement(FileSelectorItem, props);
          })
        )
      );
    }
  }]);
  return FileSelector;
}(React$1.Component);

var log$2 = 'CommandPframe:log';

var CommandPframe = function (_Component) {
  inherits(CommandPframe, _Component);

  function CommandPframe(props) {
    classCallCheck(this, CommandPframe);

    var _this = possibleConstructorReturn(this, (CommandPframe.__proto__ || Object.getPrototypeOf(CommandPframe)).call(this, props));

    _this.state = {
      open: false,
      component: React$1__default.createElement(FileSelector, null)
    };
    return _this;
  }

  createClass(CommandPframe, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.glEventHub.on('commander:show', this.selectComponent);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.glEventHub.off('commander:show', this.selectComponent);
    }
  }, {
    key: 'selectComponent',
    value: function selectComponent(evt) {
      log$2('selecting component:', evt);
    }
  }, {
    key: 'render',
    value: function render() {

      return React$1__default.createElement(
        'div',
        { className: 'CommandPframe' },
        this.state.component
      );
    }
  }]);
  return CommandPframe;
}(React$1.Component);

var PreviewPframe = function (_Component) {
  inherits(PreviewPframe, _Component);

  function PreviewPframe(props) {
    classCallCheck(this, PreviewPframe);

    var _this = possibleConstructorReturn(this, (PreviewPframe.__proto__ || Object.getPrototypeOf(PreviewPframe)).call(this, props));

    _this.state = {
      baseDir: PROJECT_DIRECTORY,
      serverReady: false,
      serverPort: null
    };
    _this.server = null;
    _this.port = 8132;
    _this.frame = null;
    return _this;
  }

  createClass(PreviewPframe, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var server = express();
      server.use(express.static(PROJECT_DIRECTORY));
      this.server = server.listen(this.port, function () {
        console.log('PreviewPframe:', 'server started');
        _this2.setState({ serverReady: true });
      });
      this.props.glEventHub.on('preview:refresh', function () {
        return _this2.refresh();
      });
      this.props.glContainer.setTitle('Live Preview');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.frame.view.addEventListener('dom-ready', function () {
        // this.frame.view.openDevTools()
      });
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      this.frame.view.reload();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.server.close();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var src = 'http://localhost:' + this.port;
      return React$1__default.createElement(
        'div',
        { className: 'preview-pframe' },
        React$1__default.createElement(Webview, { src: src,
          ref: function ref(frame) {
            return _this3.frame = frame;
          },
          nodeintegration: true,
          disablewebsecurity: true
        })
      );
    }
  }]);
  return PreviewPframe;
}(React$1.Component);

var DebugPframe = function (_Component) {
  inherits(DebugPframe, _Component);

  function DebugPframe(props) {
    classCallCheck(this, DebugPframe);

    var _this = possibleConstructorReturn(this, (DebugPframe.__proto__ || Object.getPrototypeOf(DebugPframe)).call(this, props));

    _this.state = {
      messages: []
    };
    return _this;
  }

  createClass(DebugPframe, [{
    key: 'render',
    value: function render() {
      return React$1__default.createElement(
        'div',
        { className: 'DebugPframe' },
        '//',
        consoleBoard.injectRender({ toggleByTouch: false, showOnInit: true, showInput: true })
      );
    }
  }]);
  return DebugPframe;
}(React$1.Component);

var Debugger = function (_Component) {
  inherits(Debugger, _Component);

  function Debugger() {
    classCallCheck(this, Debugger);
    return possibleConstructorReturn(this, (Debugger.__proto__ || Object.getPrototypeOf(Debugger)).apply(this, arguments));
  }

  createClass(Debugger, [{
    key: 'render',
    value: function render() {
      return React$1__default.createElement(
        'h2',
        null,
        'This is the debug module'
      );
    }
  }]);
  return Debugger;
}(React$1.Component);

Debugger.componentFactory = function (container, props) {
  ReactDOM.render(new Debugger(props), container);
};

// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
var log = debug('app:log');

var PROJECT_DIRECTORY$1 = '/Users/ada/github/pframe5-demo';
global.PROJECT_DIRECTORY = PROJECT_DIRECTORY$1;

var config = {
    content: [{
        type: 'row',
        content: [{
            type: 'react-component',
            component: 'editorComponent',
            props: { file: PROJECT_DIRECTORY$1 + '/sketch.js' }
        }, {
            type: 'column',

            content: [{
                type: 'react-component',
                component: 'previewComponent',
                title: 'Live Preview',
                props: {}
            }, {
                type: 'react-component',
                component: 'debugComponent',
                tile: 'Debugger',
                props: {}
            }]
        }]
    }]
};

var gl = void 0;

gl = new GoldenLayout(config);

gl.registerComponent('editorComponent', EditorPframe);
gl.registerComponent('previewComponent', PreviewPframe);
gl.registerComponent('debugComponent', DebugPframe);
//gl.registerComponent('fileTreeComponent', FileTree)
gl.registerComponent('testComponent', function (container, componentState) {
    container.getElement().html('<h2>' + componentState.label + '</h2>');
});

gl.init();
document.addEventListener('keypress', function (evt) {
    log(evt);
});

window.refreshPreview = function () {
    return gl.eventHub.emit('preview:refresh');
};
window.saveFile = function () {
    return gl.eventHub.emit('editor:save-active-file');
};
window.log = function () {
    for (var _len = arguments.length, msg = Array(_len), _key = 0; _key < _len; _key++) {
        msg[_key] = arguments[_key];
    }

    return gl.eventHub.emit('debugger:log', { message: msg });
};
//ReactDOM.render(<CommandPframe glEventHub={gl.eventHub}/>, document.getElementById('command-pframe'))

}());
//# sourceMappingURL=index.js.map