import React from 'react';
import { Link } from 'react-router-dom';

export default function Posts({posts, deletePost}) {
  let postList = posts.map(post => {
    return (
      <div className="Post container" key={post.id}>
        <Link to={"/posts/" + post.id}>
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
          <button onClick={() => {deletePost(post.id)}}>Delete</button>
        </div>
      </div>
    )
  })
  return (
    <div className="Posts container">
      <div>
        <Link to='/posts/0'>New Post</Link>
      </div>
      {postList}
    </div>
  )
}
