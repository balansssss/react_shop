import Banner from "../../../components/Main/Banner/Banner";
import {connect} from "react-redux";
import {getBanners} from "../../../redux/selectors";
import {nextBanner, prevBanner} from "../../../redux/reducers/Main/BannerReducer";
import {useNavigate} from "react-router-dom";

const BannerContainer = props => {
    const navigate = useNavigate();

    const openPage = () => {
        return navigate(`/catalog`);
    }

    return(
        <Banner banners={props.banners}
                prevBanner={props.prevBanner}
                nextBanner={props.nextBanner}
                openPage={openPage}
        />
    )
}

const mapStateToProps = state => {
    return {
        banners: getBanners(state)
    }
}

export default connect(mapStateToProps, {nextBanner, prevBanner})(BannerContainer)