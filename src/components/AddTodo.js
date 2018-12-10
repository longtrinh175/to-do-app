import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'

class  AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: "" }
    }

    handChange = (e) => {
        this.setState({text: e.target.value})
    }

    handSave = (e) => {
        let { text } = this.state
        let texttrim = text.trim()
        let textchuan = texttrim.replace(/\s+/g, " ")
        e.preventDefault()
        if (!textchuan) {
            confirm("Bạn cần nhập giá trị trước khi lưu") // eslint-disable-line
            this.setState({ text: ""})
            return
        }
        this.props.addTodo(textchuan)
        this.setState({ text: ""})
    }
    render() {
        return (
            <form onSubmit={this.handSave}>
                <div className="input-group">
                    <span className="input-group-btn">
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={this.handSave}
                        >Thêm
                            <span className="fa fa-plus-square ml-10"></span>
                        </button>
                    </span>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.text} 
                        onChange={this.handChange}
                        placeholder="thêm hoạt động" />
                </div>
            </form>
        )
    }
}


export default connect(null, { addTodo })(AddTodo)