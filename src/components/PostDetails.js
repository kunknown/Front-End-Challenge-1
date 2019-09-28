import React from 'react'

export default function PostDetails({post}) {
  return (
    <div className="PostDetails">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {
        post.comments && post.comments.map(entry => {
          return (
            <div key={entry.id}>
              {entry.body}
            </div>
          )
        })
      }
    </div>
  )
}
