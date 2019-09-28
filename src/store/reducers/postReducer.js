const test = [
  {id:'1', title:'title1', description:'description1'},
  {id:'2', title:'title2', description:'description2'}
]

const postReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_POSTS':
      state = action.data;
      console.log('get posts', state);
      return state;
    default: 
      return state;
  }
}

export default postReducer;