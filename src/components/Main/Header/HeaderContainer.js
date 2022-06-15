import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getDarkMode} from "../../../redux/selectors";
import {changeDarkMode} from "../../../redux/reducers/Main/HeaderReducer";

const HeaderContainer = props => {
    return (
        <Header darkMode={props.darkMode}
                changeDarkMode={props.changeDarkMode}/>
    )
}

const mapStateToProps = state => {
    return {
        darkMode: getDarkMode(state)
    }
}

export default connect(mapStateToProps, {
    changeDarkMode
})(HeaderContainer)