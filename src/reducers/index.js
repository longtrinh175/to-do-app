import { combineReducers } from 'redux'
import todosById from './todosById'
import filterType from './filterType'
import sortType from './sortType'
import searchValue from './searchValue'
import { sortNames, filterNames } from '../constants/actiontypes'
import { getListFromState } from '../selectors'

const getIdsFromList = list => list.map(item => item.id) //lay danh sach id tu mot list da tuong tac voi state hien thi
const mapIdsAndStateToVisibleList = (ids, state) => ids.map(id => state.todosById[id]) // map danh sach ids ta duoc visible list

const sortfromAtoZ = (a, b) => {
    if (a.text < b.text) return -1
    else if (a.text > b.text) return 1
    else return 0
}

const sortfromZtoA = (a, b) => {
    if (a.text < b.text) return 1
    else if (a.text > b.text) return -1
    else return 0
}

const xoaDau = (str) => {
    str = str.toLowerCase()
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i")
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
    str = str.replace(/đ/g, "d")
    return str
}

const ListXoaDau = list => {
    return list.map(item => {return {...item, text: xoaDau(item.text)}})
}

const sortList = (list, sortType) => {
    switch (sortType) {
        case sortNames.SORT_FROM_A_TO_Z:
            return list.sort(sortfromAtoZ)
        case sortNames.SORT_FROM_Z_TO_A:
            return list.sort(sortfromZtoA)
        default:
            return list
    }
}

const filterList = (list, filterType) => {
    switch (filterType) {
        case filterNames.ALL:
            return list
        case filterNames.ACTIVE:
            return list.filter(item => item.status === true)
        case filterNames.COMPLETED:
            return list.filter(item => item.status === false)
        default:
            return list
    }
}

const searchList = (list, searchValue) => {
    if (!searchValue) {
        return list
    }
    return list.filter(item =>
            item.text.indexOf(searchValue) !== -1
        )
}
// lấy danh sách theo trạng thái: sortType, filterType, searchValue
export const visibleList = state => {
    let tmp = getListFromState(state) 
    tmp = ListXoaDau(tmp)
    tmp = sortList(tmp, state.sortType)
    tmp = filterList(tmp, state.filterType)
    tmp = searchList(tmp, state.searchValue)
    let tmpIds = getIdsFromList(tmp)
    tmp = mapIdsAndStateToVisibleList(tmpIds, state)
    return tmp
}

export default combineReducers({
    todosById,
    filterType,
    sortType,
    searchValue
})