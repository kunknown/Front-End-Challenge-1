import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../store/actions/postActions';
import Posts from '../components/Posts';
import { Link } from 'react-router-dom';

function PostsContainer(props) {

  useEffect(() => {
    if(props.posts.length === 0){
      props.getPosts();
    }
  });

  return (
    <div className="PostsContainer">
    {
        props.posts && props.posts.map(post => {
          return (
            <Link to={"/posts/" + post.id} key={post.id}>
              <Posts post={post} />
            </Link>
          )
        })
      }
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