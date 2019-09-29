import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts, deletePost } from '../store/actions/postActions';
import Posts from '../components/Posts';
import { Link } from 'react-router-dom';

function PostsContainer(props) {

  useEffect(() => {
    if(!props.posts){
      props.getPosts();
    }
  });

  return (
    <div className="PostsContainer">
      <div>
        <Link to='/posts/0'>New Post</Link>
      </div>
    {
        props.posts && props.posts.map(post => {
          return (
            <Posts post={post} postId={post.id} key={post.id} deletePost={props.deletePost}/>
          )
        })
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