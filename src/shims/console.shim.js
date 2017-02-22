var fastSafeStringify = require('fast-safe-stringify')
function tryStringify (obj) {
  try { return JSON.stringify(obj) } catch (_) {}
}

const defaultLog = window.console.log
window.console.log = function(...args) {
  args.forEach(arg => {
    const serial = fastSafeStringify(arg)
    defaultLog(serial)
  })
}
