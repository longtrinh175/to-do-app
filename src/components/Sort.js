import React from 'react'
import SortContainer from '../containers/SortContainer'
import { sortNames } from '../constants/actiontypes'

export default class Sort extends React.Component {
    render () {
        return (   
            <div className="dropdown inline ml-10">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                    Sắp xếp
                    <span className="fa fa-sort ml-10"></span>
                </button>
                <ul className="dropdown-menu text-align-center">
                    <SortContainer sortName={sortNames.SORT_FROM_A_TO_Z}>A -- Z</SortContainer>
                    <SortContainer sortName={sortNames.SORT_FROM_Z_TO_A}>Z -- A</SortContainer>
                </ul>        
            </div>
        )
    }
}