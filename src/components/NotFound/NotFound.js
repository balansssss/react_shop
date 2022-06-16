import HeaderContainer from "../Main/Header/HeaderContainer";
import {useLocation} from "react-router-dom";
import FooterContainer from "../Main/Footer/FooterContainer";

const NotFound = props => {
    const path = useLocation().pathname;

    return (
        <div>
            <HeaderContainer />
            <div className='notfound'>
                Сторінка <span className='ms-warning'>{path}</span> не знайдена. Спробуйте ще раз...
            </div>
            <FooterContainer />
        </div>
    )
}

export default NotFound;