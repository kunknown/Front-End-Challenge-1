import axios from 'axios';
import history from '../../config/history'

export const getPosts = () => {
  return (dispatch, getState) => {
    //async operation
    axios.get('https://simple-blog-api.crew.red/posts')
    .then(res => {
      //continue action dispatch
      dispatch({type: 'GET_POSTS', data: res.data})
    })    
  }
}

export const getPost = (postId) => {
  return (dispatch, getState) => {
    axios.get('https://simple-blog-api.crew.red/posts/' + postId + '?_embed=comments')
    .then(res => {
      dispatch({type: 'GET_POST', data: res.data})
    })
  }
}

export const addComment = (e, postId) => {
  return (dispatch, getState) => {
    e.preventDefault();
    let body = e.target.comment.value;
    e.target.reset();
    axios.post('https://simple-blog-api.crew.red/comments', {postId: postId, body: body})
    .then(res => {
      dispatch({type: 'ADD_COMMENT', data: res.data});
    })
  }
}

export const newPost = (e) => {
  return (dispatch, getState) => {
    e.preventDefault();
    const target = e.target;
    const newPost = {
      title: target.title.value.toString(),
      body: target.body.value.toString(),
      author: target.author.value.toString(),
      date: new Date().toString()
    }
    axios.post('https://simple-blog-api.crew.red/posts', newPost)
    .then(res => {
      dispatch({type: 'NEW_POST', data: res.data});
      history.push('/');
    })
    .catch(err => {
      console.error(err);
    })
  }
}

export const deletePost = (postId) => {
  return (dispatch, getState) => {
    axios.delete('https://simple-blog-api.crew.red/posts/' + postId)
    .then(res => {
      dispatch({type: 'DELETE_POST', data: postId});
    })
  }
}

export const clearPost = () => {
  return (dispatch, getState) => {
    dispatch({type: 'CLEAR_CURRENT_POST'});
  }
}

export const updatePost = (e, postId) => {
  return (dispatch, getState) => {
    e.preventDefault();
    const target = e.target;
    const updatedPost = {
      title: target.title.value.toString(),
      body: target.body.value.toString(),
      author: target.author.value.toString(),
    }
    axios.put('https://simple-blog-api.crew.red/posts/' + postId, updatedPost)
    .then(res => {
      dispatch({type: 'UPDATE_POST', data: res.data});
      history.push('/');
    })
    .catch(err => {
      console.error(err);
    })
  }
}

