import {connect} from "react-redux";
import {compose} from "redux";
import HeaderContainer from "../Main/Header/HeaderContainer";
import FooterContainer from "../Main/Footer/FooterContainer";
import Catalog from "./Catalog";
import {getProducts, getTitleCatalog, getMaxProduct} from "../../redux/selectors";
import ProductContainerWithNavigate from "../Main/ProductsBlock/ProductContainerWithNavigate";
import {setCatalog, showMoreProducts} from "../../redux/reducers/Catalog/CatalogReducer";
import {useEffect} from "react";
import {addToCart} from "../../redux/reducers/Cart/CartReducer";

const CatalogContainer = props => {

    useEffect(() => {
        props.setCatalog();
    }, [])

    const showMoreButton = () => {
        return props.products.length > props.maxProduct ? true : false;
    }

    return (
        <div>
            <HeaderContainer />
            <Catalog products={props.products.slice(0, props.maxProduct)}
                     title={props.titleCatalog}
                     openProduct={props.openProduct}
                     showMoreProducts={props.showMoreProducts}
                     showMoreButton={showMoreButton()}
                     addToCart={props.addToCart} />
            <FooterContainer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        titleCatalog: getTitleCatalog(state),
        products: getProducts(state),
        maxProduct: getMaxProduct(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setCatalog,
        showMoreProducts,
        addToCart
    }),
    ProductContainerWithNavigate)
(CatalogContainer);