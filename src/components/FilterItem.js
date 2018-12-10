import React from 'react'

export default class FilterItem extends React.Component {
    render () {
        const { handleClick, active, child } = this.props
        return (
            <li onClick={handleClick}>
                {child}
                {active && <span className="fa fa-check ml-10"></span>}
            </li>
        )
    }
}