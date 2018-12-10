import { connect } from 'react-redux'
import FilterItem from '../components/FilterItem'
import { setFilter } from '../actions/index'

const mapStateToTops = (state, ownProps) => ({
    active: state.filterType === ownProps.filterName,
    child: ownProps.children
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleClick: () => dispatch(setFilter(ownProps.filterName))
})

export default connect(mapStateToTops, mapDispatchToProps)(FilterItem)