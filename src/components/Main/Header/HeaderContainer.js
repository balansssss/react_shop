import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getCountCart, getDarkMode, showCart, showSearch} from "../../../redux/selectors";
import {changeDarkMode} from "../../../redux/reducers/Main/HeaderReducer";
import {setShowSearch} from "../../../redux/reducers/Catalog/CatalogReducer";
import {setShowCart} from "../../../redux/reducers/Cart/CartReducer";

const HeaderContainer = props => {

    return (
        <Header darkMode={props.darkMode}
                changeDarkMode={props.changeDarkMode}
                showSearch={props.showSearch}
                showCart={props.showCart}
                setShowSearch={props.setShowSearch}
                setShowCart={props.setShowCart}
                countCart={props.countCart} />
    )
}

const mapStateToProps = state => {
    return {
        darkMode: getDarkMode(state),
        showSearch: showSearch(state),
        showCart: showCart(state),
        countCart: getCountCart(state)
    }
}

export default connect(mapStateToProps, {
    changeDarkMode,
    setShowSearch,
    setShowCart
})(HeaderContainer)