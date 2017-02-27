(function () {'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var GoldenLayout = _interopDefault(require('golden-layout'));
var React$1 = require('react');
var React$1__default = _interopDefault(React$1);
var CodeMirror = _interopDefault(require('react-codemirror'));
var electron = require('electron');
var debug = _interopDefault(require('debug'));
var jetpack = _interopDefault(require('fs-jetpack'));
var fuzzaldrin = require('fuzzaldrin');
var Webview = _interopDefault(require('react-electron-web-view'));
var express = _interopDefault(require('express'));
require('react-object');
var consoleBoard = require('console-board');
var ReactDOM = _interopDefault(require('react-dom'));
var _zillding_reactConsole = _interopDefault(require('@zillding/react-console'));
var throttle = _interopDefault(require('lodash.throttle'));

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

var log$2 = debug('CommandRouter:log');

var CommandRouter = function () {
  function CommandRouter() {
    classCallCheck(this, CommandRouter);
    this.trigger = this.trigger.bind(this);
    this.hasCommand = this.hasCommand.bind(this);
    this.handleCommand = this.handleCommand.bind(this);
    this.register = this.register.bind(this);
    this.deregister = this.deregister.bind(this);

    this.listeners = {};
    electron.ipcRenderer.on('command', this.handleCommand);
  }

  createClass(CommandRouter, [{
    key: 'trigger',
    value: function trigger(cmd) {
      if (this.hasCommand(cmd)) {
        log$2('triggering:', cmd);

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        this.handleCommand.apply(this, [null, cmd].concat(args));
      } else {
        log$2('no callbacks registered for:', cmd);
      }
    }
  }, {
    key: 'hasCommand',
    value: function hasCommand(cmd) {
      return !!this.listeners[cmd];
    }
  }, {
    key: 'handleCommand',
    value: function handleCommand(evt, cmd) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      log$2('received cmd:', cmd);
      if (this.hasCommand(cmd)) {
        this.listeners[cmd].forEach(function (cb) {
          return cb.apply(undefined, args);
        });
      }
    }
  }, {
    key: 'register',
    value: function register(cmd, callback) {
      if (!Array.isArray(this.listeners[cmd])) {
        this.listeners[cmd] = [];
      }
      if (this.listeners[cmd].includes(callback)) {
        return false;
      }

      this.listeners[cmd].push(callback);
      log$2('registered:', cmd, 'for callback:', callback);
      return true;
    }
  }, {
    key: 'deregister',
    value: function deregister(cmd, callback) {
      debugger;
      var index = this.listeners[cmd].indexOf(callback)(index >= 0 && this.listeners.splice(index, 1));
      return this.listeners[cmd].indexOf(callback) === -1;
    }
  }]);
  return CommandRouter;
}();

var CommandRouter$1 = new CommandRouter();

// Simple wrapper exposing environment variables to rest of the code.

var env = jetpack.cwd(__dirname).read('env.json', 'json');

require('codemirror/mode/javascript/javascript');
var log$1 = console.log;

var EditorPframe = function (_Component) {
  inherits(EditorPframe, _Component);

  function EditorPframe(props) {
    classCallCheck(this, EditorPframe);

    var _this = possibleConstructorReturn(this, (EditorPframe.__proto__ || Object.getPrototypeOf(EditorPframe)).call(this, props));

    _this.loadFile = _this.loadFile.bind(_this);
    _this.saveFile = _this.saveFile.bind(_this);
    _this.handleCodeChange = _this.handleCodeChange.bind(_this);

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
      if (CommandRouter$1.register('core:save', this.saveFile)) {
        log$1('registered core:save');
      } else {
        log$1('failed to register core:save');
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.glEventHub.off('editor:file-select', this.setUser);
      if (CommandRouter$1.deregister('core:save', this.saveFile)) {
        log$1('deregistered core:save');
      } else {
        log$1('failed to deregister core:save');
      }
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
      var tabTitle = nextState.file.match(/\S+\/(\S+)$/)[1];
      if (nextState.dirty) {
        this.props.glContainer.setTitle(tabTitle + ' *');
      } else {
        this.props.glContainer.setTitle(tabTitle);
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
          var tabTitle = file.match(/\S+\/(\S+)$/)[1];
          log$1('tabTitle:', tabTitle);
          _this2.props.glContainer.setTitle(tabTitle);
        });
      }
    }
  }, {
    key: 'saveFile',
    value: function saveFile() {
      var _this3 = this;

      if (this.props.glContainer.tab.isActive) {
        var project = jetpack.cwd(env.PROJECT_DIRECTORY);
        project.writeAsync(this.state.file, this.state.code).then(function () {
          log$1('saved file');
          _this3.setState({ dirty: false });
          CommandRouter$1.trigger('preview:refresh');
        });
      }
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

var log$5 = debug('FileSelectorItem:log');
function FileSelectorItem(props) {
  var className = 'file-selector-item ' + (props.selected && 'selected');
  return React.createElement(
    'li',
    { className: className },
    props.fileName
  );
}

var log$4 = debug('FileTree:log');

var FileSelector = function (_Component) {
  inherits(FileSelector, _Component);

  function FileSelector(props) {
    classCallCheck(this, FileSelector);

    var _this = possibleConstructorReturn(this, (FileSelector.__proto__ || Object.getPrototypeOf(FileSelector)).call(this, props));

    _this.handleFilterChange = _this.handleFilterChange.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.findFiles = _this.findFiles.bind(_this);

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
      log$4('keycode:', keycode);
      if (keys.includes(keycode)) {
        evt.preventDefault();
        var listSize = this.state.fileList.length;
        var selectedItem = this.state.selectedItem;
        switch (keycode) {
          case 13:
            log$4('selected file:', this.state.fileList[selectedItem]);
            break;
          case 27:
            log$4('closing command pframe');
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

      var projectDir = jetpack.cwd(env.PROJECT_DIRECTORY);
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

var log$3 = 'CommandPframe:log';

var CommandPframe = function (_Component) {
  inherits(CommandPframe, _Component);

  function CommandPframe(props) {
    classCallCheck(this, CommandPframe);

    var _this = possibleConstructorReturn(this, (CommandPframe.__proto__ || Object.getPrototypeOf(CommandPframe)).call(this, props));

    _this.selectComponent = _this.selectComponent.bind(_this);

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
      log$3('selecting component:', evt);
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

    _this.refresh = _this.refresh.bind(_this);

    _this.state = {
      baseDir: env.PROJECT_DIRECTORY,
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
      server.use(express.static(env.PROJECT_DIRECTORY));
      this.server = server.listen(this.port, function () {
        console.log('PreviewPframe:', 'server started');
        _this2.setState({ serverReady: true });
      });
      CommandRouter$1.register('preview:refresh', this.refresh);
      this.props.glContainer.setTitle('Live Preview');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.server.close();
      CommandRouter$1.deregister('preview:refresh', this.refresh);
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
    key: 'render',
    value: function render() {
      var _this3 = this;

      var src = 'http://localhost:' + this.port;
      return React$1__default.createElement(
        'div',
        { className: 'PreviewPframe' },
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

var layout = {
    content: [{
        type: 'row',
        content: [{
            type: 'react-component',
            component: 'editorComponent',
            props: { file: env.PROJECT_DIRECTORY + '/sketch.js' }
        }, {
            type: 'column',

            content: [{
                type: 'react-component',
                component: 'previewComponent',
                title: 'Live Preview',
                props: {}
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
};

// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
var log = debug('app:log');

var gl = void 0;

gl = new GoldenLayout(layout);

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

//ReactDOM.render(<CommandPframe glEventHub={gl.eventHub}/>, document.getElementById('command-pframe'))
window.addEventListener('resize', throttle(function () {
  setTimeout(function () {
    log('resized!');
    CommandRouter$1.trigger('preview:refresh');
  }, 300);
}), 500, { leading: false });

}());
//# sourceMappingURL=index.js.map