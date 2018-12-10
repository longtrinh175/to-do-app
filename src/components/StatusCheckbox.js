import React from 'react'
import { connect } from 'react-redux'
import { changeStatus } from '../actions/index'

const StatusCheckbox = ({ id, status, changeStatus }) => ( 
    <div className="checkbox">
        <label>
            <input 
                type = "checkbox" 
                onChange = { () => changeStatus(id)}
                checked = { status ? "" : "checked"}/>
            { status ? "đang làm" : "hoàn thành"} 
        </label>
    </div>
)

export default connect(null, { changeStatus })(StatusCheckbox)