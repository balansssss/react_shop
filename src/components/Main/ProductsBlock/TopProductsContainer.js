import ProductsBlock from "./ProductsBlock";
import {connect} from "react-redux";
import {getTopProducts} from "../../../redux/selectors";

const NewProductsContainer = props => {
    return (
        <ProductsBlock title={props.title}
                       products={props.topProducts}/>
    )
}

const mapStateToProps = state => {
    return {
        topProducts: getTopProducts(state)
    }
}

export default connect(mapStateToProps, {})(NewProductsContainer)