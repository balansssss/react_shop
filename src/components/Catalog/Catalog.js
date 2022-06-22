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
                        <div key={p.id} className='product' onClick={() => props.openProduct(p.id)}>
                            <img alt='product'
                                 src={p.img.url}/>
                            <p className='title'>{p.title}</p>
                            {
                                p.sale
                                    ? <p className='price'>{p.sale} ₴ <span className='sale'>{p.price} ₴ </span></p>
                                    : <p className='price'>{p.price} ₴</p>
                            }
                            <button className='button'>
                                <img src={cart_icon} alt='Cart button' className='icon'/>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Catalog;