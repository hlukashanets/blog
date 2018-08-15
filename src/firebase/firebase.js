import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyAN2Cb0s9znHazJv2STugAFUPb78rLvfMA',
  authDomain: 'blog-94964.firebaseapp.com',
  databaseURL: 'https://blog-94964.firebaseio.com',
  projectId: 'blog-94964',
  storageBucket: 'blog-94964.appspot.com',
  messagingSenderId: '756614500882'
}

firebase.initializeApp(config)

const database = firebase.database()
const githubAuthProvider = new firebase.auth.GithubAuthProvider()

export { firebase, githubAuthProvider, database as default }
