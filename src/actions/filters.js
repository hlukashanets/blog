const SET_TEXT_FILTER = 'SET_TEXT_FILTER'
const SORT_BY_TITLE = 'SORT_BY_TITLE'
const SORT_BY_NEWEST = 'SORT_BY_NEWEST'
const SORT_BY_OLDEST = 'SORT_BY_OLDEST'

export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text
})

export const sortByTitle = () => ({
  type: SORT_BY_TITLE
})

export const sortByNewest = () => ({
  type: SORT_BY_NEWEST
})

export const sortByOldest = () => ({
  type: SORT_BY_OLDEST
})

export const changeSortBy = (type) => {
  return (dispatch) => {
    if (type === 'title') {
      dispatch(sortByTitle())
    } else if (type === 'newest') {
      dispatch(sortByNewest())
    } else {
      dispatch(sortByOldest())
    }
  }
}
