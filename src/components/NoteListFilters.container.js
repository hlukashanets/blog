import { connect } from 'react-redux'
import NoteListFilters from './NoteListFilters'
import { setTextFilter, changeSortBy } from '../actions/filters'

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

const mapDispatchToProps = {
  setTextFilter,
  changeSortBy
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteListFilters)
