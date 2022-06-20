import React from "react";
import ProductsBlock from "./ProductsBlock";
import {connect} from "react-redux";
import {compose} from "redux";
import {getNewProducts, initializeNewProducts} from "../../../redux/selectors";
import {nextNewProduct, prevNewProduct, initialNewProducts} from "../../../redux/reducers/Main/ProductsBlockReducer";
import {ProductContainerWithNavigate} from "./ProductContainerWithNavigate";

class NewProductsContainer extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.initialNewProducts(this.props.initializeProducts)
    }

    render() {
        return (
            <ProductsBlock title={this.props.title}
                           products={this.props.newProducts}
                           prevProduct={this.props.prevNewProduct}
                           nextProduct={this.props.nextNewProduct}
                           openProduct={this.props.openProduct}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        initializeProducts: initializeNewProducts(state),
        newProducts: getNewProducts(state)
    }
}

export default compose(
    connect(mapStateToProps, {prevNewProduct, nextNewProduct, initialNewProducts}),
    ProductContainerWithNavigate)
(NewProductsContainer)