import { SET_SORT, sortNames } from '../constants/actiontypes'

const sortType = (state = sortNames.SORT_FROM_A_TO_Z, action) => {
    switch (action.type) {
        case SET_SORT:
            return action.sortName
        default:
            return state
    }
}

export default sortType