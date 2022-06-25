import {connect} from "react-redux";
import Cart from "./Cart";
import {getCart} from "../../../redux/selectors";

const CartContainer = props => {
    console.log(props)

    return (
        <Cart  />
    )
}

const mapStateToProps = state => {
    return {
        cart: getCart(state)
    }
}

export default connect(mapStateToProps, {})(CartContainer);