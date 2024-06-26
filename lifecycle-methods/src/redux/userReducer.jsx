const userReducer = (state = [],action) => {

    switch(action.type){
        case 'ADD_USER':
            return ( [...state,action.payload]);

        case 'REMOVE':
            return( state.filter((user)=> user.id !== action.payload));
        default:
            return state;
    }
}

export default userReducer
