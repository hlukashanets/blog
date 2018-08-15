import React from 'react'
import NoteListItem from './NoteListItem'

const NoteList = (props) => (
  !props.isLoaded
    ? <div className='loader loader__note-list'>
      <img className='loader__image' src='/images/loader.gif' />
    </div>
    : <div className='content-container'>
      <div className='list'>
        <div className='list-body'>
          {
            props.error ? (
              <div className='list-item--message'>
                <span>{props.error}</span>
              </div>
            ) : (
              props.notes.map((note) => {
                return <NoteListItem key={note.id} {...note} />
              })
            )
          }
        </div>
      </div>
    </div>
)

export default NoteList
