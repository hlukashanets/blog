export default (state, props) => {
  if (!/\S/.test(props.note.title) || !props.note.id) {
    return true
  }
}
