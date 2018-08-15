import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const NoteListItem = ({ id, title, body, createdAt }) => (
  <Link className='list-item' to={`/edit/${id}`}>
    <h3 className='list-item__title'>{title}</h3>
    <span className='list-item__createdAt'>{moment(createdAt).format('DD.MM.Y, H:mm')}</span>
  </Link>
)

export default NoteListItem
