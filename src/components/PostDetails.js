import React from 'react'

export default function PostDetails({post, addComment, postId, newPost}) {
  
  return (
    <div className="PostDetails">
      <form name="post-details" onSubmit={newPost}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" defaultValue={post.title} required/>
        </div>
        <div>
          <label htmlFor="body">Description</label>
          <input type="text" name="body" defaultValue={post.body} required/>
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" name="author" defaultValue={post.author} required/>
        </div>
        <div>
          <label htmlFor="date">Published Date</label>
          <input type="text" name="date" defaultValue={post.date} disabled/>
        </div>
        <input type="submit" hidden />
      </form>
      {
        post.comments && post.comments.map(entry => {
          return (
            <div key={entry.id}>
              {entry.body}
            </div>
          )
        })
      }
      {
        (postId !== 0) && (
          <form name="new-comment" onSubmit={addComment}>
            <label htmlFor="comment">New Comment</label>
            <input type="text" name="comment" autoFocus/>
            <input type="button" hidden />
          </form>
        )
      }
      
    </div>
  )
}
