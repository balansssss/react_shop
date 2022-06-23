import {connect} from "react-redux";
import HeaderContainer from "../Main/Header/HeaderContainer";
import FooterContainer from "../Main/Footer/FooterContainer";
import Product from "./Product";
import {useParams} from "react-router-dom";
import {getProducts} from "../../redux/selectors";
import {useState} from "react";
import {ProductContainerWithNavigate} from "../Main/ProductsBlock/ProductContainerWithNavigate";
import {compose} from "redux";

const ProductContainer = props => {
    const params = useParams();
    const productId = params.id;

    const [counter, setCounter] = useState(0);
    const [details, setDetails] = useState(false);

    const showDetails = () => {
        setDetails(!details);
    }

    const changeCounter = symbol => {
        if (symbol === '+') {
            setCounter(counter+1)
        }
        if (symbol === '-' && counter > 0) {
            setCounter(counter-1)
        }
    }

    const getProduct = (products, productId) => {
        const product = products.filter(p => {
            return Number(p.id) === Number(productId)
        })

        return product[0]
    }

    return (
        <div>
            <HeaderContainer />
            <Product product={getProduct(props.products, productId)}
                     counter={counter}
                     changeCounter={changeCounter}
                     details={details}
                     showDetails={showDetails}
                     openProduct={props.openProduct} />
            <FooterContainer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: getProducts(state)
    }
}

export default compose(
    connect(mapStateToProps, null),
    ProductContainerWithNavigate)
(ProductContainer);