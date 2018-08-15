import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { history } from './history/history'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetNotes } from './actions/notes'
import { login, logout } from './actions/auth'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { firebase } from './firebase/firebase'
import LoadingPage from './components/LoadingPage'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetNotes()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})