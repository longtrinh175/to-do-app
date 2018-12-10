import React from 'react'
import Item from './Item'

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: "" }
    }

    handleChange = e => {
        this.setState({ value: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const { setSearch } = this.props
        const { value } = this.state
        let tmp = value.trim()
        tmp = tmp.replace(/\s+/g, ' ')
        setSearch(tmp)
        this.setState({ value: ""})
    }

    renderChild = item => <Item key={item.id} item={item} />
    
    render () {
        const { list } = this.props
        const { value } = this.state
        return (
            <div>
                <table className="table table-hover App">
                    <thead>
                        <tr>
                            <th className="App">Trạng thái </th>
                            <th className="App">Hoạt động</th>
                            <th className="App">chỉnh sửa</th>
                        </tr>

                    </thead>
                    <tbody>
                        {/*Search*/}
                        <tr>
                            <td></td>
                            <td>
                                <form onSubmit={this.handleSubmit}>
                                    <input 
                                    type="text" 
                                    className="form-control"  
                                    value = {value} 
                                    onChange={this.handleChange}
                                    placeholder="tìm kiếm..." />
                                </form>
                            </td>
                            <td></td>
                        </tr>
                        {/*Item*/}
                        { list.map(this.renderChild) }
                    </tbody>
                </table>
            </div> 
        )
    }
}