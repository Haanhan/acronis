import axios from "axios"

const api = "http://localhost:8000/api";


export const getAllTodos = () => {
    return axios.get(`${api}/todos`)
        .then(response => response.data)
}

export const getTodo = id => {
    return axios.get(`${api}/todo/${id}`)
        .then(response => response.data)
}

export const updateTodo = todo => {
    return axios.put(`${api}/todo`, todo)
        .then(response => response.data)
}

export const deleteTodo = id => {
    return axios.delete(`${api}/todo/${id}`)
        .then(response => response.data)
}

export const insertTodo = todo => {
    return axios.post(`${api}/todo`, todo)
        .then(response => response.data)
}