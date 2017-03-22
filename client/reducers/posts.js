const posts= (state = [], action) => {
  console.log(...state.slice(0,3));
  switch(action.type){
    case 'INCREMENT_LIKES':
      console.log('Increment likes');
      const i = action.index;
      return[
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), //after we are updating
      ]
    default:
      return state;
  }
}

export default posts;
