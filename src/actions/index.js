import { CHANGE_STATUS, ADD_TODO, DELETE_TODO, EDIT_TODO, CHANGE_EDIT_STATUS, SET_SORT, SET_FILTER, SET_SEARCH_VALUE } from '../constants/actiontypes'
let nextId = 4004;
export const changeStatus = (id) => ({
    type: CHANGE_STATUS,
    id
})

export const addTodo = ( text ) => ({
    type: ADD_TODO,
    id: nextId++,
    text
})

export const deleteTodo = ( id ) => ({
    type: DELETE_TODO,
    id
})

export const editedTodo = ( id ) => ({
    type: CHANGE_EDIT_STATUS,
    id
})

export const editTodo = ( id, text ) => ({
    type: EDIT_TODO,
    id,
    text
})

export const setSort = ( sortName ) => ({
    type: SET_SORT,
    sortName
})

export const setFilter = ( filterName ) => ({
    type: SET_FILTER,
    filterName
})

export const setSearch = ( searchName ) => ({
    type: SET_SEARCH_VALUE,
    searchName
})