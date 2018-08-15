export default (notes, { text, sortBy }) => {
  return notes.filter((note) => {
    const textMatch = note.title.toLowerCase().includes(text.toLowerCase())
    return textMatch
  }).sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title)
    } else if (sortBy === 'newest') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'oldest') {
      return a.createdAt < b.createdAt ? -1 : 1
    }
  })
}
