import React, { Component } from 'react'
import "./App.css"
import AddTodo from './components/AddTodo'
import Sort from './components/Sort'
import Filter from './components/Filter'
import TableContainer from './containers/TableContainer'

class App extends Component {
    render() {
        return (
            <div >
                <div className="container mt-10"></div>
                <div className="row">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div> {/* tạo khoảng cách với lề */}

                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        {/*Add todo*/}
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <AddTodo />
                        </div>

                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div> {/* tạo khoảng cách với AddTodo*/}

                        {/*Sort & Filter*/}
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <Sort />
                            <Filter />
                        </div>

                        {/*table*/}
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-10">
                            <TableContainer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App

