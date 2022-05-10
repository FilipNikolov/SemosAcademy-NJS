export const sayHello = () => { //action creator

    return {
        type: "SAY_HELLO",
        payload: "Hi and welcome to my lovely Redux App !!!" // <-action
    }

}

export const sayAnything = () => { //action creator

    return {
        type: "SAY_HI",
        payload: "Hi and Bye!!!" // <-action
    }

}
