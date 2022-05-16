import { properties } from "../config/properties";

export const getComments = () => {
    return fetch(`${properties.api.root}/comments`)
        .then(res => res.json())
        .then(json => Promise.resolve(json))
        .catch(err => Promise.reject(err))
}

export const removeComments = (id) => {
    return fetch(`${properties.api.root}/comments${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(json => Promise.resolve(id))
        .catch(err => Promise.reject(err))
}

export const changeComments = (changeComments) => {
    return fetch(`${properties.api.root}/comments/${comment.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(comment)
    })
        .then(res => res.json())
        .then(json => Promise.resolve(json))
        .catch(err => Promise.reject(err))
}