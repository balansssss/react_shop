import HeaderContainer from "./Header/HeaderContainer";
import BannerContainer from "./Banner/BannerContainer";
import NewProductsContainer from "./ProductsBlock/NewProductsContainer";
import TopProductsContainer from "./ProductsBlock/TopProductsContainer";
import FooterContainer from "./Footer/FooterContainer";

const Main = () => {
    return (
        <div>
            <HeaderContainer />
            <BannerContainer />
            <NewProductsContainer title='Нове' />
            <TopProductsContainer title='Топ продажів' />
            <FooterContainer />
        </div>
    )
}

export default Main;