import React, { useState } from 'react'

const Blog = (props) => {
  const { blog, handleLikeChange, handleRemove } = props

  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const blogStyle = {
    'paddingTop': 15,
    'paddingLeft': 4,
    'border': 'solid green',
    'borderWidth': 1,
    'marginBottom': 8
  }

  return (
    <div style={blogStyle}>
      <div style={hideWhenVisible} className='blogTitle'>
        <div>
          {blog.title} by {blog.author} <button id='view' onClick={toggleVisibility}>view</button>
        </div>
      </div>
      <div style={showWhenVisible} className='blogAll'>
        <div>
          {blog.title} <button onClick={toggleVisibility}>Hide</button>
        </div>
        <div>{blog.url}</div>
        <div id='likes'>
          {blog.likes} <button onClick={() => handleLikeChange(blog)}>Like</button>
        </div>
        <div>{blog.author}</div>
        <button onClick={() => handleRemove(blog)}>Remove</button>
      </div>
    </div>
  )
}

export default Blog
