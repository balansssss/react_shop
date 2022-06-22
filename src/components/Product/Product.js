const Product = props => {
    const p = props.product

    return (
        <div className='product-card'>
            <div>
                <img className='product-img' alt='Product Image'
                     src={props.product.img.url}/>
            </div>
            <div className='product-info'>
                <h2>{p.title}</h2>
                {
                    p.sale
                        ? <p className='product-price'><b>{p.sale} ₴ </b><span
                            className='product-sale'>{p.price} ₴ </span></p>
                        : <p className='product-price'><b>{p.price} ₴</b></p>
                }
                <div className='product-options counter'>
                    <p className='options-title'>Кількість:</p>
                    <button className='but-counter'
                            onClick={() => props.changeCounter('-')}
                    >-</button>
                    <span className='counter'>{props.counter}</span>
                    <button className='but-counter'
                            onClick={() => props.changeCounter('+')}
                    >+</button>
                </div>
                <div className='product-options'>
                    <p className='options-title'>Колір:</p>
                    <div className='options-color'>
                        <div className='color'></div>
                        <div className='color'></div>
                    </div>
                </div>
                <button className='but-buy'>Купити зараз</button>
                <div className='details'>
                    <div className='detail-header'>
                        <div className='title'>Опис</div>
                        <button className='but-detail'
                                onClick={ props.showDetails }>+</button>
                    </div>
                    { props.details
                        ? <div className='detail-info'>
                            {props.product.detail}
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Product;