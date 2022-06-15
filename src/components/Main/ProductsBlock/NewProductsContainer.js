import ProductsBlock from "./ProductsBlock";
import {connect} from "react-redux";
import {getNewProducts} from "../../../redux/selectors";

const NewProductsContainer = props => {
    return (
        <ProductsBlock title={props.title}
                       products={props.newProducts}/>
    )
}

const mapStateToProps = state => {
    return {
        newProducts: getNewProducts(state)
    }
}

export default connect(mapStateToProps, {})(NewProductsContainer)