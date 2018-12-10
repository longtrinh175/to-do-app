import { SET_SEARCH_VALUE } from '../constants/actiontypes'

const searchValue = (state = "", action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return action.searchName
        default:
            return state
    }
}

export default searchValue