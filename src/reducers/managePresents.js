
export function managePresents(state, action){

    state = {
        numberOfPresents: 0
    }

    if (action.type === 'INCREASE') {state.numberOfPresents = state.numberOfPresents + 1}

    return state
}
