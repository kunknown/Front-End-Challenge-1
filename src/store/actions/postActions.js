export const getPosts = () => {
  return (dispatch, getState) => {
    //async operation
    //continue action dispatch
    dispatch({type: 'GET_POSTS'});
  }
}