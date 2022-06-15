import ProductsBlock from "./ProductsBlock";
import {connect} from "react-redux";
import {getTopProducts} from "../../../redux/selectors";
import {prevTopProduct, nextTopProduct} from "../../../redux/reducers/Main/ProductsBlockReducer";

const NewProductsContainer = props => {
    return (
        <ProductsBlock title={props.title}
                       products={props.topProducts}
                       prevProduct={props.prevTopProduct}
                       nextProduct={props.nextTopProduct} />
    )
}

const mapStateToProps = state => {
    return {
        topProducts: getTopProducts(state)
    }
}

export default connect(mapStateToProps, {prevTopProduct , nextTopProduct})(NewProductsContainer)