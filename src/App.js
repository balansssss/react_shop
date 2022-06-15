import "../src/assets/styles/style.scss";
import {connect} from "react-redux";
import HeaderContainer from "./components/Main/Header/HeaderContainer";
import {getDarkMode} from "./redux/selectors";
import BannerContainer from "./components/Main/Banner/BannerContainer";
import NewProductsContainer from "./components/Main/ProductsBlock/NewProductsContainer";
import TopProductsContainer from "./components/Main/ProductsBlock/TopProductsContainer";
import FooterContainer from "./components/Main/Footer/FooterContainer";

const App = props => {
  return (
      <div className='app'>
        <div className={ props.darkMode ? 'container dark' : 'container'}>
          <HeaderContainer />
          <BannerContainer />
          <NewProductsContainer title='Нове' />
          <TopProductsContainer title='Топ продажів' />
          <FooterContainer />
        </div>
      </div>
  );
}

const mapStateToProps = state => {
    return {
        darkMode: getDarkMode(state)
    }
}

export default connect(mapStateToProps, null)(App);
