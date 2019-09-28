import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../store/actions/postActions';

function PostsContainer(props) {

  useEffect(() => {

  });

  console.log(props);

  return (
    <div className="PostsContainer" posts={props.posts}>
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => {
      dispatch(getPosts())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);