import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/index'

class DeleteButton extends React.Component {
    handleClick = () => {
        const { text, id, deleteTodo } = this.props
        let retVal = confirm("Bạn muốn xóa " + text + " ?") // eslint-disable-line
        if (retVal === false) {
            return
        } else {
            return deleteTodo(id)
        }
    }
    render () {
        return (
            <button 
                type="button" 
                className="btn btn-danger" 
                onClick={this.handleClick}>
                Xóa
                <span className="fa fa-trash ml-10"></span>
            </button> 
        )
    }
}


export default connect(null, { deleteTodo })(DeleteButton)