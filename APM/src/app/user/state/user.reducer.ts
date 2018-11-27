export function reducer(state, action){
    switch(action.type){
        case 'MASK_USER_NAME':
            console.log('show product code: ' + JSON.stringify(state));
            console.log('payload: ' + action.payload);
            return {
                ...state,
                maskUserName: action.payload
            };
        default:
            return state;
    }
}