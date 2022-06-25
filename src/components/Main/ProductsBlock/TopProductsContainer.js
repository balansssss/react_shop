import ProductsBlock from "./ProductsBlock";
import React from "react";
import {connect} from "react-redux";
import {getTopProducts, initializeTopProducts} from "../../../redux/selectors";
import {prevTopProduct, nextTopProduct, initialTopProducts} from "../../../redux/reducers/Main/ProductsBlockReducer";
import ProductContainerWithNavigate from "./ProductContainerWithNavigate";
import {compose} from "redux";

class TopProductsContainer extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.initialTopProducts(this.props.initializeProducts)
    }

    render() {
        return (
            <ProductsBlock title={this.props.title}
                           products={this.props.topProducts}
                           prevProduct={this.props.prevTopProduct}
                           nextProduct={this.props.nextTopProduct}
                           openProduct={this.props.openProduct}
                           addToCart={this.props.addToCart} />
        )
    }
}

const mapStateToProps = state => {
    return {
        initializeProducts: initializeTopProducts(state),
        topProducts: getTopProducts(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        prevTopProduct,
        nextTopProduct,
        initialTopProducts
    }),
    ProductContainerWithNavigate)
(TopProductsContainer)