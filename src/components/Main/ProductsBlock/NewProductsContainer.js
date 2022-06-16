import ProductsBlock from "./ProductsBlock";
import {connect} from "react-redux";
import {getNewProducts} from "../../../redux/selectors";
import {nextNewProduct, prevNewProduct} from "../../../redux/reducers/Main/ProductsBlockReducer";
import {useNavigate} from "react-router-dom";

const NewProductsContainer = props => {
    const navigate = useNavigate();

    const openProduct = id => {
        return navigate(`/product/${id}`)
    }

    return (
        <ProductsBlock title={props.title}
                       products={props.newProducts}
                       prevProduct={props.prevNewProduct}
                       nextProduct={props.nextNewProduct}
                       openProduct={openProduct} />
    )
}

const mapStateToProps = state => {
    return {
        newProducts: getNewProducts(state)
    }
}

export default connect(mapStateToProps,
    {prevNewProduct, nextNewProduct})(NewProductsContainer)