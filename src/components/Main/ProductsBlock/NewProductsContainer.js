import ProductsBlock from "./ProductsBlock";
import {connect} from "react-redux";
import {getNewProducts} from "../../../redux/selectors";
import {nextNewProduct, prevNewProduct} from "../../../redux/reducers/Main/ProductsBlockReducer";

const NewProductsContainer = props => {
    return (
        <ProductsBlock title={props.title}
                       products={props.newProducts}
                       prevProduct={props.prevNewProduct}
                       nextProduct={props.nextNewProduct} />
    )
}

const mapStateToProps = state => {
    return {
        newProducts: getNewProducts(state)
    }
}

export default connect(mapStateToProps, {prevNewProduct, nextNewProduct})(NewProductsContainer)