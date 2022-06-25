import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getDarkMode, showCart, showSearch} from "../../../redux/selectors";
import {changeDarkMode} from "../../../redux/reducers/Main/HeaderReducer";
import {setShowSearch} from "../../../redux/reducers/Catalog/CatalogReducer";

const HeaderContainer = props => {

    return (
        <Header darkMode={props.darkMode}
                changeDarkMode={props.changeDarkMode}
                showSearch={props.showSearch}
                showCart={props.showCart}
                setShowSearch={props.setShowSearch} />
    )
}

const mapStateToProps = state => {
    return {
        darkMode: getDarkMode(state),
        showSearch: showSearch(state),
        showCart: showCart(state)
    }
}

export default connect(mapStateToProps, {
    changeDarkMode,
    setShowSearch
})(HeaderContainer)