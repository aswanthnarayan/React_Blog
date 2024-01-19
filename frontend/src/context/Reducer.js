const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            };
            break;
        case "LOGIN_SUCSESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };
        case "LOGIN_SUCSESS":
            return {
                user: null,
                isFetching: false,
                error: false
            }
        default:
            return state;
    }
}


export default Reducer;