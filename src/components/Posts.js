import React from 'react';
import { Link } from 'react-router-dom';


export default function Posts({post, postId, deletePost}) {
  return (
    <div className="Posts">
      <Link to={"/posts/" + postId}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.body}</p>
      <div>
        Author: {post.author}
      </div>
      <div>
        Date: {post.date}
      </div>
      <div>
        <button onClick={() => {deletePost(postId)}}>Delete</button>
      </div>
    </div>
  )
}
