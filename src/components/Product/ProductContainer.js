import {connect} from "react-redux";
import HeaderContainer from "../Main/Header/HeaderContainer";
import FooterContainer from "../Main/Footer/FooterContainer";
import Product from "./Product";
import {useParams} from "react-router-dom";


const ProductContainer = props => {
    const params = useParams();
    const productId = params.id;

    return (
        <div>
            <HeaderContainer />
            <Product productId={productId} />
            <FooterContainer />
        </div>
    )
}

export default connect(null, null)(ProductContainer);