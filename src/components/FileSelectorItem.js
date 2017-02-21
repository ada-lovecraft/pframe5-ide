import debug from 'debug'
const log = debug('FileSelectorItem:log')
export default function FileSelectorItem(props) {
  const className = `file-selector-item ${(props.selected && 'selected')}`
  return (
    <li className={className}>{props.fileName}</li>
  )
}
