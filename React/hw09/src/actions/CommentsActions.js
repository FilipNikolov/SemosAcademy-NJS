import {FETCH_COMMENTS_FAIL,FETCH_COMMENTS_SUCCESS} from './../constants/CommentsConstants';

export const fetchCommentsSuccess = (comments) => { //comments = Array(500) prefrleniot json
    return{
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentsFail = (error) =>{ //error = alert error od prefrleniot error na fetch povikot
    return{
        type: FETCH_COMMENTS_FAIL,
        payload: error
    }
}

export const fetchCommentsRequest = () =>{
    return dispatch =>{
        fetch("https://jsonplaceholder.typicode.com/comments") //povik do url
            .then(res=>res.json())
            .then(json=> dispatch(fetchCommentsSuccess(json))) //ako e uspesen dispatch na akcija success
            .catch(err=> dispatch(fetchCommentsFail(err))) //ako e neuspesen dispatch na akcija fail
    }
}