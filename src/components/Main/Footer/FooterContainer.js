import Footer from "./Footer";
import {connect} from "react-redux";

const FooterContainer = props => {
    return <Footer />
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, {})(FooterContainer);