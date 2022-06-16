import HeaderContainer from "../Main/Header/HeaderContainer";
import {useParams} from "react-router-dom";
import FooterContainer from "../Main/Footer/FooterContainer";

const Product = props => {
    const params = useParams();

    return (
        <div>
            <HeaderContainer />
            Product {params.id}
            <FooterContainer />
        </div>
    )
}

export default Product;