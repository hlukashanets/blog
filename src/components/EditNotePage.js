import React from 'react'
import NoteFormContainer from './NoteForm.container'

const EditNotePage = ({ id, note = {}, startRemoveNote, startEditNote }) => {
  const handleOnSubmit = (note) => startEditNote(id, note)
  const handleOnClick = () => startRemoveNote({ id })

  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Edit Post</h1>
        </div>
      </div>
      <div className='content-container'>
        {/* Edit a post with id of {props.match.params.id} */}
        <NoteFormContainer
          id={id}
          note={note}
          onSubmit={handleOnSubmit}
        />
        <button className='button button--remove'
          onClick={handleOnClick}
        >
          Remove Post
        </button>
      </div>
    </div>
  )
}

export default EditNotePage
