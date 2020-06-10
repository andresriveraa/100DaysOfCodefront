const INITIAL_STATE = {
  users: [123]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'traer_users':
        return {...state, users: action.payload}  
        
        default: return state;
  }
}