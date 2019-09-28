const test = [
  {id:'1', title:'title1', description:'description1'},
  {id:'2', title:'title2', description:'description2'}
]

const postReducer = (state = test, action) => {
  switch(action.type){
    case 'GET_POSTS':
      console.log('get posts');
      return state;
    default: 
      return state;
  }
}

export default postReducer;