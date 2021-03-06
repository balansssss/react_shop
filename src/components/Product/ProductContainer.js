import {connect} from "react-redux";
import HeaderContainer from "../Main/Header/HeaderContainer";
import FooterContainer from "../Main/Footer/FooterContainer";
import Product from "./Product";
import {useParams} from "react-router-dom";
import {getAllProducts} from "../../redux/selectors";
import {useState} from "react";
import ProductContainerWithNavigate from "../Main/ProductsBlock/ProductContainerWithNavigate";
import {compose} from "redux";
import {addToCart} from "../../redux/reducers/Cart/CartReducer";

const ProductContainer = props => {
    const params = useParams();
    const productId = params.id;

    const [counter, setCounter] = useState(1);
    const [details, setDetails] = useState(false);

    const showDetails = () => {
        setDetails(!details);
    }

    const changeCounter = symbol => {
        if (symbol === '+') {
            setCounter(counter+1)
        }
        if (symbol === '-' && counter > 1) {
            setCounter(counter-1)
        }
    }

    const getProduct = (products, productId) => {
        const product = products.filter(p => {
            return Number(p.id) === Number(productId)
        })

        return product[0]
    }

    const addToCart = product => {
        props.addToCart(product, counter);
    }

    return (
        <div>
            <HeaderContainer />
            <Product product={getProduct(props.products, productId)}
                     counter={counter}
                     changeCounter={changeCounter}
                     details={details}
                     showDetails={showDetails}
                     openProduct={props.openProduct}
                     addToCart={addToCart}/>
            <FooterContainer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: getAllProducts(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        addToCart
    }),
    ProductContainerWithNavigate)
(ProductContainer);