import Banner from "../../../components/Main/Banner/Banner";
import {connect} from "react-redux";
import {getBanners} from "../../../redux/selectors";
import {nextBanner, prevBanner} from "../../../redux/reducers/Main/BannerReducer";

const BannerContainer = props => {
    return(
        <Banner banners={props.banners}
                prevBanner={props.prevBanner}
                nextBanner={props.nextBanner}
        />
    )
}

const mapStateToProps = state => {
    return {
        banners: getBanners(state)
    }
}

export default connect(mapStateToProps, {nextBanner, prevBanner})(BannerContainer)