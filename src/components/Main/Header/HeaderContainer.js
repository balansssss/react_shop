import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getDarkMode, showSearch} from "../../../redux/selectors";
import {changeDarkMode} from "../../../redux/reducers/Main/HeaderReducer";
import {setShowSearch} from "../../../redux/reducers/Catalog/CatalogReducer";

const HeaderContainer = props => {
    if (props.showSearch) {
        document.body.style.overflow = 'hidden';
    }

    return (
        <Header darkMode={props.darkMode}
                changeDarkMode={props.changeDarkMode}
                showSearch={props.showSearch}
                setShowSearch={props.setShowSearch} />
    )
}

const mapStateToProps = state => {
    return {
        darkMode: getDarkMode(state),
        showSearch: showSearch(state)
    }
}

export default connect(mapStateToProps, {
    changeDarkMode,
    setShowSearch
})(HeaderContainer)