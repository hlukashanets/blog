import { connect } from 'react-redux'
import EditNotePage from './EditNotePage'
import { startEditNote, startRemoveNote } from '../actions/notes'
import selector from '../selectors/editNote'

const mapStateToProps = (state, props) => {
  return {
    note: selector(state, props),
    id: props.match.params.id
  }
}

const mapDispatchToProps = {
  startEditNote,
  startRemoveNote
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNotePage)
