let state = {numberOfPresents: 0}

export function managePresents(state, action){
   if (action.type === 'INCREASE'){
       return ({numberOfPresents: state.numberOfPresents + 1})
   }
   return state 
}
