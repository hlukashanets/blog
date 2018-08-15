export default (state, props) => state.notes.find((note) => note.id === props.match.params.id)
