import { connect } from 'react-redux'
import NoteList from './NoteList'
import selectNotes from '../selectors/notes'
import { changeIsLoaded } from '../actions/others'

const error = (state) => {
  if (state.notes.length === 0) return 'No posts'
}

const mapStateToProps = (state) => {
  return {
    notes: selectNotes(state.notes, state.filters),
    isLoaded: state.another.isLoaded,
    error: error(state)
  }
}

const mapDispatchToProps = {
  changeIsLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)
