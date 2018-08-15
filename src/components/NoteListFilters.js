import React from 'react'
import { Link } from 'react-router-dom'

const NoteListFilters = (props) => (
  <div className='content-container'>
    <div className='filters'>
      <div className='filters__item__input'>
        <input
          type='text'
          className='text-input'
          placeholder='Search posts'
          value={props.filters.text}
          onChange={(e) => {
            props.setTextFilter(e.target.value)
          }}
        />
      </div>
      <div className='filters__item__input input-sort'>
        <label htmlFor='filters'>Sort</label>
        <select
          className='select'
          id='filters'
          value={props.filters.sortBy}
          onChange={(e) => {
            props.changeSortBy(e.target.value)
          }}
        >
          <option value='title'>By Title</option>
          <option value='newest'>Newest first</option>
          <option value='oldest'>Oldest first</option>
        </select>
      </div>
      <div className='filters__item__button'>
        <Link className='button' to='/create'>Add Post</Link>
      </div>
    </div>
  </div>
)

export default NoteListFilters
