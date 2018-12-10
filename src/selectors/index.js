import { createSelector } from 'reselect'

const getList = state => Object.values(state.todosById)

export const getListFromState = createSelector(
    [getList],
    (list) => list
)