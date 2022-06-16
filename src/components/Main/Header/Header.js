import React from "react";
import cart from "../../../assets/img/Header/Cart.png";
import search from "../../../assets/img/Header/Search.png";
import themeMode from "../../../assets/img/Header/ThemeMode.png";

const Header = props => {

    return(
        <div className='header'>
            <div className='menu '>
                <div className='mode'>
                    <img src={themeMode} title={props.darkMode ? 'Свiтлий режим' : 'Темний режим' } onClick={props.changeDarkMode}/>
                </div>
                <h1 className='logo'>Фiкус</h1>
                <div className='buttons'>
                    <img src={search} title='Пошук'/>
                    <img src={cart} title='Кошик' />
                </div>
            </div>
            <div className='nav'>
                <div className='item'>Головна</div>
                {/*<div className='item'>Каталог</div>*/}
                <div className='item'>Про нас</div>
            </div>
        </div>
    )
}

export default Header;