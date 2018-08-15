import database from '../firebase/firebase'
import { history } from '../history/history'
import { changeIsLoaded } from './others'
import moment from 'moment'

const ADD_NOTE = 'ADD_NOTE'
const REMOVE_NOTE = 'REMOVE_NOTE'
const EDIT_NOTE = 'EDIT_NOTE'
const SET_NOTES = 'SET_NOTES'
const CHANGE_TITLE = 'CHANGE_TITLE'
const CHANGE_BODY = 'CHANGE_BODY'

export const addNote = ({
  id = 'none',
  title = '',
  body = ''
} = {}) => ({
  type: ADD_NOTE,
  note: {
    id,
    title,
    body,
    createdAt: moment()
  }
})

export const startAddNote = ({ title, body, createdAt }) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid
    const note = { title, body, createdAt }

    const ref = await database.ref(`users/${uid}/notes`).push(note)
    dispatch(editNote('none', {id: ref.key}))
    dispatch(changeIsLoaded())
    history.push('/dashboard')
  }
}

export const removeNote = ({ id }) => ({
  type: REMOVE_NOTE,
  id
})

export const startRemoveNote = ({ id }) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid
    await database.ref(`users/${uid}/notes/${id}`).remove()
    dispatch(removeNote({ id }))
    dispatch(changeIsLoaded())
    history.push('/dashboard')
  }
}

export const editNote = (id, updates) => ({
  type: EDIT_NOTE,
  id,
  updates
})

export const startEditNote = (id, updates) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid
    await database.ref(`users/${uid}/notes/${id}`).update(updates)
    dispatch(changeIsLoaded())
    history.push('/dashboard')
  }
}

export const setNotes = (notes) => ({
  type: SET_NOTES,
  notes
})

export const startSetNotes = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid
    const snapshot = await database.ref(`users/${uid}/notes`).once('value')
    const notes = []
    snapshot.forEach((childSnapshot) => {
      notes.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    })
    dispatch(setNotes(notes))
  }
}

export const startReloadNotes = (id, noteData) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid
    const snapshot = await database.ref(`users/${uid}/notes/${id}`).once('value')
    const {
      title = '',
      body = '',
      createdAt = 0
    } = noteData
    const note = { body, createdAt, title }

    if (id === 'none') {
      dispatch(removeNote({ id: 'none' }))
    } else if (JSON.stringify(note) !== JSON.stringify(snapshot.val()) && !!id) {
      dispatch(editNote(id, snapshot.val()))
    }
    dispatch(changeIsLoaded())
  }
}

export const changeTitle = (id, title) => ({
  type: CHANGE_TITLE,
  id,
  title
})

export const changeBody = (id, body) => ({
  type: CHANGE_BODY,
  id,
  body
})

export const startChangeTitle = (id, title) => {
  return (dispatch) => {
    if (!id) {
      dispatch(addNote()) &&
      dispatch(changeTitle(id = 'none', title))
    } else {
      dispatch(changeTitle(id, title))
    }
  }
}

export const startChangeBody = (id, body) => {
  return (dispatch) => {
    if (!id) {
      dispatch(addNote()) &&
      dispatch(changeBody(id = 'none', body))
    } else {
      dispatch(changeBody(id, body))
    }
  }
}
