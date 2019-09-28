import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from '../components/Posts';

function PostDetailsContainer(props) {
  const [post, updatePost] = useState(null);
  
  useEffect(() => {
    if(!post){
      axios.get('https://simple-blog-api.crew.red/posts/' + props.match.params.postId + '?_embed=comments')
      .then(res => {
        updatePost(res.data);
      })
    }
  })

  return (
    <div className="PostDetailsContainer">
      {
        post && <Posts post={post} />
      }
    </div>
  )
}

export default PostDetailsContainer;