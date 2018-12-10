import React from 'react'
import FilterContainer from '../containers/FilterContainer'
import { filterNames } from '../constants/actiontypes'

export default class Filter extends React.Component {
    render () {
        return (
            <div className="dropdown inline ml-10">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                    Lọc
                    <span className="fa fa-caret-down ml-10"></span>
                </button>
                <ul className="dropdown-menu text-align-center">
                    <FilterContainer filterName={filterNames.ACTIVE}>Đang làm</FilterContainer>
                    <FilterContainer filterName={filterNames.COMPLETED}>Hoàn thành</FilterContainer>
                    <FilterContainer filterName={filterNames.ALL}>Tất cả</FilterContainer>
                </ul>
            </div>
        )
    }
}

