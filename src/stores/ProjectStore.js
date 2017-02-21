import jetpack from 'fs-jetpack'
import ProjectFile from '../interfaces/ProjectFile'
class ProjectFileStore {
  projectFiles = [];
  constructor() {
    this.findProjectFiles()
  }
  get openProjectFilesCount() {
    return this.projectFiles.filter(
      file => file.open === true
    )
  }
  report() {
    if(this.projectFiles.length === 0) {
      return "<none>"
    }
    const lastFile = this.projectFiles[this.projectFiles.length - 1]
    return ```Last File Add: "${lastFile.name}"
  Open: ${this.openProjectFilesCount}/${files.length}```

  }
  addProjectFile(projectFile) {
    this.projectFiles.push(file)
  }
  findProjectFiles() {
    jetpack.findAsync('~/ada/github/pframe5-demo',{matching:['*.js','!node_modules/**']})
    .then(files => {
      files.forEach(
        file => this.addProjectFile(new ProjectFile(
          file.match(/\/?(\S+)$/)[1],
          file
        ))
      )
    })
  }
}

const projectFileStore = new ProjectFileStore()
