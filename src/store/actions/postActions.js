import axios from 'axios';

export const getPosts = () => {
  return (dispatch, getState) => {
    //async operation
    axios.get('https://simple-blog-api.crew.red/posts')
    .then(res => {
      //continue action dispatch
      dispatch({type: 'GET_POSTS', data: res.data});
    })    
  }
}