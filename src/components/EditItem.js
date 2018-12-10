import React from 'react'
import { connect } from 'react-redux'
import { editTodo, deleteTodo, editedTodo } from '../actions/index'

class EditItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: props.text}
    }
    handChange = (e) => {
        this.setState({ text : e.target.value })
    }
    handSubmit = (e) => {
        const { text } = this.state
        const texttrim = text.trim()
        const textchuan = texttrim.replace(/\s+/g, " ")
        e.preventDefault();
        if (!textchuan) {
            let valconfirm = confirm("bạn muốn xóa " + this.props.text + "?") // eslint-disable-line
            if (valconfirm) {
                this.props.deleteTodo(this.props.id)
            } else {
                this.props.editedTodo(this.props.id)
                return
            }
        }
        let valconfirm = (this.props.text !== textchuan) ? confirm("bạn muốn đổi " + this.props.text + " thành " + textchuan) : false // eslint-disable-line
        if (valconfirm) {
            this.props.editTodo( this.props.id, textchuan)
        } 
        this.props.editedTodo(this.props.id)
            
    }
    render() {
        return (
            
            <form onSubmit={this.handSubmit}>               
                <input 
                    type="text" 
                    className="form-control"
                    onChange={this.handChange}
                    value = {this.state.text}
                />           
            </form>
            
        )
    }
}

export default connect(null, { editTodo, deleteTodo, editedTodo })(EditItem)