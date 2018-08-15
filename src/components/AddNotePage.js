import React from 'react'
import NoteFormContainer from './NoteForm.container'

const AddNotePage = ({ note, startAddNote }) => {
  const handleOnSubmit = (note) => startAddNote(note)

  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Add Post</h1>
        </div>
      </div>
      <div className='content-container'>
        <NoteFormContainer
          id={note.id}
          note={note}
          onSubmit={handleOnSubmit}
        />
      </div>
    </div>
  )
}

export default AddNotePage
