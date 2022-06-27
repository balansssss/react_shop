import {useNavigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {addToCart} from "../../../redux/reducers/Cart/CartReducer";
import {setShowSearch} from "../../../redux/reducers/Catalog/CatalogReducer";
import {showSearch} from "../../../redux/selectors";

const ProductContainerWithNavigate = Component => {
    const HOC = props => {
        const navigate = useNavigate();

        const openProduct = id => {
            if (!props.showSearch) {
                props.setShowSearch(false);
            }
            return navigate(`/product/${id}`);
        }

        return <Component {...props} openProduct={openProduct} />
    }

    const mapStateToProps = state => {
        return {
            showSearch: showSearch(state)
        }
    }

    return connect(mapStateToProps, {addToCart, setShowSearch})(HOC);
}

export default ProductContainerWithNavigate;
