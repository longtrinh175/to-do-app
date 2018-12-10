import { connect } from 'react-redux'
import Table from '../components/Table'
import { visibleList } from '../reducers/index'
import { setSearch } from '../actions/index'

const mapStateToProps = state => {
    return {
        list: visibleList(state)
    }
}

export default connect(mapStateToProps, { setSearch })(Table) 