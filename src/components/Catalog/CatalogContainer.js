import {connect} from "react-redux";
import HeaderContainer from "../Main/Header/HeaderContainer";
import FooterContainer from "../Main/Footer/FooterContainer";
import Catalog from "./Catalog";

const CatalogContainer = props => {
    return (
        <div>
            <HeaderContainer />
            <Catalog />
            <FooterContainer />
        </div>
    )
}

export default connect(null, null)(CatalogContainer);