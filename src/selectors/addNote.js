export default (state) => state.notes.find((note) => note.id === 'none') || {}
