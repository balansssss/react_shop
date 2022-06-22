import Filter from "./Filter";
import {connect} from "react-redux";
import {getFilters} from "../../../redux/selectors";
import {setFilter} from "../../../redux/reducers/Catalog/CatalogReducer";

const FilterContainer = props => {

    const setFilter = event => {
        const filterId = event.target.value;
        const category = event.target.id;
        props.setFilter(category, Number(filterId));
    }

    return (
        <Filter totalProducts={props.totalProducts}
                filters={props.filters}
                setFilter={setFilter} />
    )
}

const mapStateToProps = state => {
    return {
        filters: getFilters(state)
    }
}

export default connect(mapStateToProps, {setFilter})(FilterContainer);