const INITIAL_STATE = {
  posts: [1,2,3]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'traer_posts':
      return {...state, posts: action.payload}
      default: return state
  }
}

