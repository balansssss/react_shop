import {connect} from "react-redux";
import {compose} from "redux";
import HeaderContainer from "../Main/Header/HeaderContainer";
import FooterContainer from "../Main/Footer/FooterContainer";
import Catalog from "./Catalog";
import {getProducts, getTitleCatalog} from "../../redux/selectors";
import {ProductContainerWithNavigate} from "../Main/ProductsBlock/ProductContainerWithNavigate";

const CatalogContainer = props => {
    return (
        <div>
            <HeaderContainer />
            <Catalog products={props.products}
                     title={props.titleCatalog}
                     openProduct={props.openProduct}   />
            <FooterContainer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        titleCatalog: getTitleCatalog(state),
        products: getProducts(state)
    }
}

export default compose(
    connect(mapStateToProps, null),
    ProductContainerWithNavigate)
(CatalogContainer);