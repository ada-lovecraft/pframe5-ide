var fastSafeStringify = require('fast-safe-stringify')
function tryStringify (obj) {
  try { return JSON.stringify(obj) } catch (err) {}
}

const defaultLog = window.console.log
window.console.log = function(...args) {
  default.log(tryStringify(args) || fastSafeStringify(args))
}
