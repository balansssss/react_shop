import Search from "./Search";
import {connect} from "react-redux";
import {getSearchResult, showSearchMessage} from "../../../redux/selectors";
import {searchProduct} from "../../../redux/reducers/Catalog/CatalogReducer";

const SearchContainer = props => {
    const searchProduct = event => {
        const key = event.target.value;
        props.searchProduct(key);
    }

    return (
        <Search searchResult={props.searchResult}
                searchProduct={searchProduct}
                searchMessage={props.searchMessage} />
    )
}

const mapStateToProps = state => {
    return {
        searchResult: getSearchResult(state),
        searchMessage: showSearchMessage(state)
    }
}

export default connect(mapStateToProps, {searchProduct})(SearchContainer);