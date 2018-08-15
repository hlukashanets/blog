import { connect } from 'react-redux'
import AddNotePage from './AddNotePage'
import { startAddNote } from '../actions/notes'
import selector from '../selectors/addNote'

const mapStateToProps = (state) => {
  return {
    note: selector(state)
  }
}

const mapDispatchToProps = {
  startAddNote
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNotePage)
