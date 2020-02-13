export function manageFriends(stateReceived, action){

    state = {
        friends: []
    }

    switch (action.type) {
        case 'ADD_FRIEND':
            state.friends = [...stateReceived.friends, action.friend]
          return state;
        case 'REMOVE_FRIEND':
            state.friends = stateReceived.friends.filter(friend=>friend.id!==action.friend.id)
            return state;
        default:
            return stateReceived;
    }
}
