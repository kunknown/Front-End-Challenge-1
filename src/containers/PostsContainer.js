import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts, deletePost } from '../store/actions/postActions';
import Posts from '../components/Posts';

function PostsContainer(props) {

  useEffect(() => {
    if(!props.posts){
      props.getPosts();
    }
  });

  return (
    <div className="PostsContainer">
    {
      props.posts && <Posts posts={props.posts} deletePost={props.deletePost}/>
    }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => {dispatch(getPosts())},
    deletePost: (postId) => {dispatch(deletePost(postId))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);