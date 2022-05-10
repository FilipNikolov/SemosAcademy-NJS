const initialState = {
    welcomen: "Welcome!"
}
const WelcomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "WELC_OMEN":
            return {
                ...state,
                welcomen: action.payload
            }
        default: return state;
    }
}

export default WelcomeReducer;