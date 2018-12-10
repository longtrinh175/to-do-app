import { connect } from 'react-redux'
import SortItem from '../components/SortItem'
import { setSort } from '../actions/index'

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.sortType === ownProps.sortName,
        child: ownProps.children
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleClick: () => dispatch(setSort(ownProps.sortName))
})
export default connect(mapStateToProps, mapDispatchToProps)(SortItem)
