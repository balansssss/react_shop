import Banner from "../../../components/Main/Banner/Banner";
import {connect} from "react-redux";
import {getBanners} from "../../../redux/selectors";

const BannerContainer = props => {
    return(
        <Banner banners={props.banners}/>
    )
}

const mapStateToProps = state => {
    return {
        banners: getBanners(state)
    }
}

export default connect(mapStateToProps, {})(BannerContainer)