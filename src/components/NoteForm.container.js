import { connect } from 'react-redux'
import NoteForm from './NoteForm'
import { changeIsLoaded, changeWarningMessage } from '../actions/others'
import { startChangeBody, startChangeTitle, startReloadNotes } from '../actions/notes'
import error from '../selectors/error'

const mapStateToProps = (state, props) => {
  return {
    error: error(state, props),
    errorMessage: state.another.errorMessage
  }
}

const mapDispatchToProps = {
  startChangeTitle,
  startChangeBody,
  startReloadNotes,
  changeIsLoaded,
  changeWarningMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
