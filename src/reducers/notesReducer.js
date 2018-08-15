const postsReducerDefaultState = []

export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        action.note
      ]
    case 'REMOVE_NOTE':
      return state.filter((note) => note.id !== action.id)
    case 'EDIT_NOTE':
      return state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            ...action.updates
          }
        } else {
          return note
        }
      })
    case 'SET_NOTES':
      return action.notes
    case 'CHANGE_TITLE':
      return state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            title: action.title
          }
        } else {
          return note
        }
      })
    case 'CHANGE_BODY':
      return state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            body: action.body
          }
        } else {
          return note
        }
      })
    default:
      return state
  }
}
