import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function PostsContainer() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="PostsContainer" posts={posts}>
      
    </div>
  )
}

export default connect(
  mapStateToProps
)(PostsContainer);