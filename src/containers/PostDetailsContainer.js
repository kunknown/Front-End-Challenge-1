import React, { Component } from 'react';
import PostDetails from '../components/PostDetails';
import { addComment, newPost, getPost, clearPost, updatePost } from '../store/actions/postActions';
import { connect } from 'react-redux';

class PostDetailsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {postId: parseInt(props.match.params.postId)}
  }

  componentDidMount(){
    if(this.state.postId !== 0){
      this.props.getPost(this.state.postId)
    }
  }

  componentWillUnmount(){
    this.props.clearPost()
  }

  addCommentHandler = (e) => {
    this.props.addComment(e, this.state.postId)
  }

  newOrUpdatePostHandler = (e) => {
    if(this.state.postId === 0){
      return this.props.newPost(e);
    }
    else{
      return this.props.updatePost(e, this.state.postId);
    }
  }

  render(){
    return (
      <div className="PostDetailsContainer">
        {
          this.props.currentPost && <PostDetails post={this.props.currentPost} addComment={this.addCommentHandler} postId={this.state.postId} newPost={this.newOrUpdatePostHandler}/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPost: state.posts.currentPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (e, postId) => {dispatch(addComment(e, postId))},
    newPost: (e) => {dispatch(newPost(e))},
    getPost: (postId) => {dispatch(getPost(postId))},
    clearPost: () => {dispatch(clearPost())},
    updatePost: (e, postId) => {dispatch(updatePost(e, postId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsContainer);