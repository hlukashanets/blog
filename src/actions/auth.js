import { firebase, githubAuthProvider } from '../firebase/firebase'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

export const login = (uid) => ({
  type: LOGIN,
  uid
})

export const startLogin = () => () =>
  firebase.auth().signInWithPopup(githubAuthProvider)

export const logout = () => ({
  type: LOGOUT
})

export const startLogout = () => () => firebase.auth().signOut()
