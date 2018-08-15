const filtersReducerDefaultState = {
  text: '',
  sortBy: 'newest'
}

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_TITLE':
      return {
        ...state,
        sortBy: 'title'
      }
    case 'SORT_BY_NEWEST':
      return {
        ...state,
        sortBy: 'newest'
      }
    case 'SORT_BY_OLDEST':
      return {
        ...state,
        sortBy: 'oldest'
      }
    default:
      return state
  }
}
