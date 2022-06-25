import {useNavigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {addToCart} from "../../../redux/reducers/Cart/CartReducer";

const ProductContainerWithNavigate = Component => {
    const HOC = props => {
        const navigate = useNavigate();

        const openProduct = id => {
            return navigate(`/product/${id}`);
        }

        return <Component {...props} openProduct={openProduct} />
    }
    return connect(null, {addToCart})(HOC);
}

export default ProductContainerWithNavigate;
