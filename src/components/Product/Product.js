
const Product = props => {

    return (
        <div className='product-card'>
            <div>
                <img className='product-img' alt='Product Image'
                     src={'https://st.focusedcollection.com/9264440/i/650/focused_194907278-stock-photo-conceptual-girl-picking-flower-white.jpg'}/>
            </div>
            <div className='product-info'>
                <h2>Title {props.productId}</h2>
                <p className='product-price'><b>46$</b> <span className='product-sale'>58$</span></p>
                <div className='product-options counter'>
                    <p className='options-title'>Кількість:</p>
                    <button className='but-counter'>-</button>
                    <span className='counter'>0</span>
                    <button className='but-counter'>+</button>
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
                    <div className='title'>Опис</div>
                    <button className='but-details'>+</button>
                </div>
            </div>
        </div>
    )
}

export default Product;