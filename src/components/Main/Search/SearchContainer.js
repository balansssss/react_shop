import Search from "./Search";
import {connect} from "react-redux";
import {getSearchResult, showSearchMessage} from "../../../redux/selectors";
import {searchProduct, setShowSearch} from "../../../redux/reducers/Catalog/CatalogReducer";
import {compose} from "redux";
import ProductContainerWithNavigate from "../ProductsBlock/ProductContainerWithNavigate";

const SearchContainer = props => {
    const searchProduct = event => {
        const key = event.target.value;
        props.searchProduct(key);
    }

    return (
        <Search searchResult={props.searchResult}
                searchProduct={searchProduct}
                searchMessage={props.searchMessage}
                setShowSearch={props.setShowSearch}
                openProduct={props.openProduct} />
    )
}

const mapStateToProps = state => {
    return {
        searchResult: getSearchResult(state),
        searchMessage: showSearchMessage(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        searchProduct,
        setShowSearch
    }),
    ProductContainerWithNavigate)
(SearchContainer);