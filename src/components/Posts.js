import React from 'react';

export default function Posts({post}) {
  return (
    <div className="Posts">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div>
        <span>Author: {post.author}</span>
        <span>Date: {post.date}</span>
      </div>
    </div>
  )
}
