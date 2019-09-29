const postReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case 'GET_POSTS':
      newState = action.data.map(post => {
        if(!post.comments){
          post.comments = [];
        }
        if(!post.date){
          post.date = new Date().toString();
        }
        return post;
      })
      .sort((a, b) => {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
          return (Date.parse(dateB) - Date.parse(dateA));
        })
      return {...state, posts: newState};
    case 'ADD_COMMENT':
      //insert comment into state for specified postId
      newState = {...state.currentPost};
      newState.comments.push(action.data);
      return {...state, currentPost: newState};
    case 'NEW_POST':
      newState = [action.data, ...state.posts]
      return {...state, posts: newState};
    case 'DELETE_POST':
      newState = state.posts.filter(entry => entry.id !== parseInt(action.data));
      return {...state, posts: newState};
    case 'GET_POST':
      return {...state, currentPost: action.data}
    case 'CLEAR_CURRENT_POST':
      return {...state, currentPost: {}}
    case 'UPDATE_POST':
      newState = state.posts.map(entry => {
        if(entry.id === action.data.id){
          entry = action.data;
        }
        return entry;
      })
      return {...state, posts: newState}
    default: 
      return state;
  }
}

export default postReducer;