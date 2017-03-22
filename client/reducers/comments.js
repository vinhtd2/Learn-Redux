const postComments = (state=[], action) => {
  console.log(action);
  switch(action.type){
    case 'ADD_COMMENT':
      return[...state,{
        user: action.author123,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
    // we need to return the new state without the deleted comment
      return[
        ...state.slice(0,action.i),
        ...state.slice(action.i + 1)

      ]
    default:
      return state;
  }
}

const comments = (state = [], action) => {
  if(typeof action.postId !== 'undefined'){
    return{
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
