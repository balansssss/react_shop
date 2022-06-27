import cancel_img from "../../../assets/img/Search/cancel.png";

const Cart = props => {

    return (
        <div className='column-container'>
            <div className='cart'>
                <div className='column-header'>
                    <b className='column-title'>Кошик</b>
                    <img className='column-cancel' src={cancel_img} alt='Cancel' onClick={() => props.setShowCart(false)}/>
                </div>
                <div className='cart-products'>
                    {
                        props.products.length > 0
                            ?
                            props.products.map(p => {
                                return <div key={p.id} className='cart-product'>
                                    <div>
                                        <img className='product-img' src={p.img.url} alt='Product'/>
                                    </div>
                                    <div className='product-info'>
                                        <div>
                                            <b>{p.title}</b>
                                            {
                                                p.sale
                                                    ? <p className='product-price'>{p.sale} ₴ <span
                                                        className='product-sale'>{p.price} ₴ </span></p>
                                                    : <p className='product-price'>{p.price} ₴</p>
                                            }
                                        </div>
                                        <div className='product-options counter'>
                                            <button className='but-counter'
                                                    onClick={() => props.changeProductCount(p, '-')}
                                            >-
                                            </button>
                                            <span className='counter'>{p.count}</span>
                                            <button className='but-counter'
                                                    onClick={() => props.changeProductCount(p, '+')}
                                            >+
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            })
                            :
                            props.showMessage
                                ? <div className='search-message'>
                                    {props.textMessage}
                                </div>
                                : null
                    }
                </div>
                <div className='column-footer'>
                    <b className='column-title'>Всього</b>
                    <b className='column-price'>{props.sumCart}</b>
                </div>
                <button className='but-buyCart' onClick={props.buyCart}>
                    Замовити
                </button>
            </div>
        </div>
    )
}

export default Cart;