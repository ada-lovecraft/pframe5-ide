import {ipcRenderer as ipc} from 'electron'
import debug from 'debug'
const log = debug('CommandRouter:log')
class CommandRouter {
  constructor() {
    this.listeners = {}
    ipc.on('command', this.handleCommand)
  }
  trigger(cmd, ...args) {
    if(this.hasCommand(cmd)) {
      log('triggering:', cmd)
      this.handleCommand(null, cmd, ...args)
    } else {
      log('no callbacks registered for:', cmd)
    }
  }

  hasCommand(cmd) {
    return !!this.listeners[cmd]
  }
  handleCommand(evt, cmd, ...args) {
    log('received cmd:', cmd)
    if(this.hasCommand(cmd)) {
      this.listeners[cmd].forEach(cb => cb(...args))
    }
  }
  register(cmd, callback) {
    if(!Array.isArray(this.listeners[cmd])) {
      this.listeners[cmd] = []
    }
    if(this.listeners[cmd].includes(callback)) {
      return false
    }

    this.listeners[cmd].push(callback)
    log('registered:', cmd, 'for callback:', callback)
    return true
  }
  deregister(cmd, callback) {
    debugger
    const index = this.listeners[cmd].indexOf(callback)
    (index >= 0 && this.listeners.splice(index, 1))
    return this.listeners[cmd].indexOf(callback) === -1
  }
}

export default new CommandRouter()
