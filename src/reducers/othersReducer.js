const defaultState = { isLoaded: true, errorMessage: false }

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_IS_LOADED':
      return {
        ...state,
        isLoaded: !state.isLoaded
      }
    case 'CHANGE_WARNING_MESSAGE':
      if (action.error) {
        return {
          ...state,
          errorMessage: 'Please provide a title'
        }
      } else {
        return {
          ...state,
          errorMessage: ''
        }
      }
    default:
      return state
  }
}
