import cart_icon from "../../assets/img/ProductsBlock/Cart.png";
import FilterContainer from "./Filter/FilterContainer";


const Catalog = props => {
    return (
        <div className='catalog'>
            <b className='catalog-title'>{props.title}</b>
            <FilterContainer totalProducts={props.products.length}/>
            <div className='products'>
                {props.products.map(p => {
                    return (
                        <article key={p.id} className='product'>
                            <img alt='product'
                                 onClick={() => props.openProduct(p.id)}
                                 src={p.img.url}/>
                            <p className='title'>{p.title}</p>
                            {
                                p.sale
                                    ? <p className='price'>{p.sale} ₴ <span className='sale'>{p.price} ₴ </span></p>
                                    : <p className='price'>{p.price} ₴</p>
                            }
                            <button className='button'>
                                <img src={cart_icon} onClick={ () => props.addToCart(p) } alt='Cart button' className='icon'/>
                            </button>
                        </article>
                    )
                })}
            </div>
            {
                props.showMoreButton
                    ? <div className='but-container'>
                        <button className='but-showMore' onClick={props.showMoreProducts}>Показати ще</button>
                    </div>
                    : null
            }

        </div>
    )
}

export default Catalog;