import {connect} from "react-redux";
import Cart from "./Cart";
import {getCart, getCartSum, getTextMessage, showMessage} from "../../../redux/selectors";
import {buyCart, changeProductCount, setShowCart} from "../../../redux/reducers/Cart/CartReducer";

const CartContainer = props => {
    return (
        <Cart products={props.cart}
              changeProductCount={props.changeProductCount}
              showMessage={props.showMessage}
              sumCart={props.sumCart}
              setShowCart={props.setShowCart}
              buyCart={props.buyCart}
              textMessage={props.textMessage}  />
    )
}

const mapStateToProps = state => {
    return {
        cart: getCart(state),
        showMessage: showMessage(state),
        sumCart : getCartSum(state),
        textMessage: getTextMessage(state)
    }
}

export default connect(mapStateToProps, {
    changeProductCount,
    setShowCart,
    buyCart
})(CartContainer);