import ProductsBlock from "./ProductsBlock";
import {connect} from "react-redux";
import {getTopProducts} from "../../../redux/selectors";
import {prevTopProduct, nextTopProduct} from "../../../redux/reducers/Main/ProductsBlockReducer";
import {useNavigate} from "react-router-dom";

const NewProductsContainer = props => {
    const navigate = useNavigate();

    const openProduct = id => {
        return navigate(`/product/${id}`)
    }

    return (
        <ProductsBlock title={props.title}
                       products={props.topProducts}
                       prevProduct={props.prevTopProduct}
                       nextProduct={props.nextTopProduct}
                       openProduct={openProduct} />
    )
}

const mapStateToProps = state => {
    return {
        topProducts: getTopProducts(state)
    }
}

export default connect(mapStateToProps, {prevTopProduct , nextTopProduct})(NewProductsContainer)