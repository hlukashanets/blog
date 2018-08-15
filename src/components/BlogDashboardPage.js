import React from 'react'
import NoteListContainer from './NoteList.container'
import NoteListFiltersContainer from './NoteListFilters.container'

const BlogDashboardPage = () => (
  <div>
    <NoteListFiltersContainer />
    <NoteListContainer />
  </div>
)

export default BlogDashboardPage
