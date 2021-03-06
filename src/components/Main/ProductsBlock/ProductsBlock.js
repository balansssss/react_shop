import cart_icon from "../../../assets/img/ProductsBlock/Cart.png";
import prev from "../../../assets/img/ProductsBlock/prev.png";
import next from "../../../assets/img/ProductsBlock/next.png";

const ProductsBlock = props => {

    return (
        <div className='productsblock'>
            <div className='head'>
                <b className='title'>{props.title}</b>
                <div className='nav'>
                    <button>
                        <img src={prev} alt='Prev' onClick={() => props.prevProduct(props.products)} />
                    </button>
                    <button>
                        <img src={next} alt='Next' onClick={() => props.nextProduct(props.products)} />
                    </button>
                </div>
            </div>
            <div className='products'>
                {props.products.map((p,i)=>{
                    if (i<4) {
                        return (
                            <div key={p.id} className='product'>
                                <img alt='product'
                                     src={p.img.url}
                                     onClick={ () => props.openProduct(p.id)}/>
                                <p className='title'>{p.title}</p>
                                {
                                    p.sale
                                        ? <p className='price'>{p.sale} ₴ <span className='sale'>{p.price} ₴ </span></p>
                                        : <p className='price'>{p.price} ₴</p>
                                }
                                <button className='button'>
                                    <img src={cart_icon} onClick={() => props.addToCart(p)} alt='Cart button' className='icon'/>
                                </button>
                            </div>
                        )
                    }
                })}
            </div>

        </div>
    )
}

export default ProductsBlock