/* global location */
import React from 'react'
import { history } from '../history/history'

class NoteForm extends React.Component {
  handleChangeWarningMessage = () => this.props.errorMessage && this.props.changeWarningMessage()
  handleReloadNotes = () => this.props.startReloadNotes(this.props.id, this.props.note)

  componentDidMount () {
    this.props.changeIsLoaded()
    window.onpopstate = (e) => {
      e.preventDefault()
      if (location.pathname === '/dashboard') {
        this.handleChangeWarningMessage()
        this.handleReloadNotes()
      }
    }
  }

  onTitleChange = (e) => {
    const title = e.target.value
    this.props.startChangeTitle(this.props.id, title)
  }

  onBodyChange = (e) => {
    const body = e.target.value
    this.props.startChangeBody(this.props.id, body)
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    if (this.props.error) {
      this.props.changeWarningMessage(this.props.error)
    } else {
      this.props.changeWarningMessage(this.props.error)
      this.props.onSubmit({
        title: this.props.note.title,
        body: this.props.note.body,
        createdAt: this.props.note.createdAt.valueOf()
      })
    }
  }

  render () {
    return (
      <div>
        <form className='form' onSubmit={this.handleOnSubmit}>
          {this.props.errorMessage && <p className='form__error'>{this.props.errorMessage}</p>}
          <input
            className='text-input'
            type='text'
            placeholder='Title'
            autoFocus
            value={this.props.note.title || ''}
            onChange={this.onTitleChange}
          />
          <textarea
            className='textarea'
            placeholder='Add a descriptions for your post'
            value={this.props.note.body || ''}
            onChange={this.onBodyChange}
          />
          <div>
            <button className='button'>Save Post</button>
          </div>
        </form>
        <button className='button button--back' onClick={() => {
          this.handleChangeWarningMessage()
          this.handleReloadNotes().then(history.push('/dashboard'))
        }}>
            Go Back
        </button>
      </div>
    )
  }
}

export default NoteForm
