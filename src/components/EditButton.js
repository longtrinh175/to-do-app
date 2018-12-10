import React from 'react'
import { connect } from 'react-redux'
import { editedTodo }  from '../actions/index'

const EditButton = ({ id, editedTodo }) => (
    <button 
        type="button" 
        className="btn btn-warning ml-10"
        onClick={() => editedTodo(id)}
    >
        Sửa
        <span className="fa fa-edit ml-10"></span>
    </button>
)

export default connect(null, { editedTodo })(EditButton)