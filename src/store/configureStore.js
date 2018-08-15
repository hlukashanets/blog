import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import notesReducer from '../reducers/notesReducer'
import filtersReducer from '../reducers/filtersReducer'
import authReducer from '../reducers/auth'
import another from '../reducers/othersReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      filters: filtersReducer,
      auth: authReducer,
      another: another
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}
