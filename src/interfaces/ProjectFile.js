let fileCounter = 0
export default class ProjectFile {
  name = ''
  path = ''
  id = 0
  open = false
  constructor(name, path) {
    this.name = name
    this.path = path
    this.id = fileCounter++
  }
}
