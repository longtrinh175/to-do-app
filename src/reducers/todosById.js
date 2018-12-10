import { CHANGE_STATUS, EDIT_TODO, CHANGE_EDIT_STATUS, ADD_TODO, DELETE_TODO} from '../constants/actiontypes'

const initialState = {
    todosById: {
        0 : {id: 0, text: "Học C", status: true, editStatus: false},
        1 : {id: 1, text: "Đi bơi", status: false, editStatus: false},
        2 : {id: 2, text: "Đi ngủ", status: true, editStatus: false},
        3 : {id: 3, text: "Học OOP", status: true, editStatus: false},
        4 : {id: 4, text: "Ăn sáng", status: false, editStatus: false},
        5 : {id: 5, text: "Tập gym", status: true, editStatus: false},
        6 : {id: 6, text: "Ăn nhậu", status: false, editStatus: false},
        7 : {id: 7, text: "Chơi với gái", status: true, editStatus: false},
        8 : {id: 8, text: "Lên chùa", status: false, editStatus: false},
        9 : {id: 9, text: "Hát hò", status: true, editStatus: false},
    }
}

const todo = (state = {} , action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return {
                ...state,
                status: !state.status
            }
        case EDIT_TODO:
            return {
                ...state,
                text: action.text
            }
        case CHANGE_EDIT_STATUS:
            return {
                ...state,
                editStatus: !state.editStatus
            }
        default:
            return state
    }
}

const todosById = (state = initialState.todosById , action) => {
    switch (action.type) {
        case CHANGE_STATUS:
        case EDIT_TODO:
        case CHANGE_EDIT_STATUS:
            return {
                ...state,
                [action.id] : todo(state[action.id], action)
            }
        case ADD_TODO:
            return {
                ...state,
                [action.id] : {
                    id: action.id,
                    text: action.text,
                    status: true,
                    editStatus: false
                }
            }
        case DELETE_TODO:
            state = {...state}
            delete state[action.id]
            return state
        default:
            return state
    }
}

export default todosById