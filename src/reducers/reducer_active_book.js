// State is old state, action is new piece of data that may
// or may not be injected into root reducer
export function(state=null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload
  }

  return state
}
