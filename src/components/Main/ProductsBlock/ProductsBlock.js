import cart_icon from "../../../assets/img/ProductsBlock/Cart.png";

const ProductsBlock = props => {
    return (
        <div className='productsblock'>
            <div className='head'>
                <b className='title'>{props.title}</b>
            </div>
            <div className='products'>
                {props.products.map(p=>{
                    return(
                        <div key={p.id} className='product'>
                            <img alt='product' src={/*p.img.url*/'https://st.focusedcollection.com/9264440/i/650/focused_194907278-stock-photo-conceptual-girl-picking-flower-white.jpg'} />
                            <p className='title'>{p.title}</p>
                            {
                                p.sale
                                    ? <p className='price'>{p.sale} ₴ <span className='sale'>{p.price} ₴ </span></p>
                                    : <p className='price'>{p.price} ₴</p>
                            }
                            <button className='button'>
                                <img src={cart_icon} alt='Cart button' className='icon' />
                            </button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ProductsBlock