import { SET_FILTER, filterNames } from '../constants/actiontypes'

const filterType = (state = filterNames.ALL, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filterName
        default:
            return state
    }
}

export default filterType