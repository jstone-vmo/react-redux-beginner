const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return !state //or return true (opposite of false)
        default: 
            return state;
    }
};

export default loggedReducer;