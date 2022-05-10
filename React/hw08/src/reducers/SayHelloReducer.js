const initialState = {
    greeting: "Hi !",
    speaking: "Bye !"

}

const SayHelloReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SAY_HELLO":
            return {
                ...state,
                greeting: action.payload
            }
        default: return state;
    }

}
const SayAnythingReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SAY_HI":
            return {
                ...state,
                speaking: action.payload
            }
        default: return state;
    }

}

export default { SayHelloReducer, SayAnythingReducer };