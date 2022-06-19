import "../src/assets/styles/style.scss";
import {connect} from "react-redux";
import {getDarkMode} from "./redux/selectors";
import Main from "./components/Main/Main";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import ProductContainer from "./components/Product/ProductContainer";
import CatalogContainer from "./components/Catalog/CatalogContainer";

const App = props => {
  return (
      <BrowserRouter>
          <div className={ props.darkMode ? 'app dark' : 'app'}>
            <div className='container'>
                <Routes>
                    <Route path='/' element={ <Main />} />
                    <Route path='/product/:id' element={ <ProductContainer />} />
                    <Route path='/catalog' element={ <CatalogContainer   />} />
                    <Route path='*' exact element={ <NotFound /> } />
                </Routes>
            </div>
          </div>
      </BrowserRouter>
  );
}

const mapStateToProps = state => {
    return {
        darkMode: getDarkMode(state)
    }
}

export default connect(mapStateToProps, null)(App);
