const CHANGE_IS_LOADED = 'CHANGE_IS_LOADED'
const CHANGE_WARNING_MESSAGE = 'CHANGE_WARNING_MESSAGE'

export const changeIsLoaded = () => ({
  type: CHANGE_IS_LOADED
})

export const changeWarningMessage = (error) => ({
  type: CHANGE_WARNING_MESSAGE,
  error
})
