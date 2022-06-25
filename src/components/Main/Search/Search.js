import cancel_img from "../../../assets/img/Search/cancel.png";

const Search = props => {

    return (
        <div className='column-container'>
            <div className='search'>
                <div className='column-header'>
                    <b className='column-title'>Пошук</b>
                    <img className='column-cancel' src={cancel_img} alt='Cancel' onClick={() => props.setShowSearch(false)}/>
                </div>
                <input type='text'
                       name='search'
                       placeholder='Введіть запит'
                       autoComplete='off'
                       className='search-input'
                       onChange={ e => props.searchProduct(e) } />
                <div className='search-results'>
                    {
                        props.searchResult.length > 0
                            ?
                            props.searchResult.map(p=>{
                                return (
                                    <article key={p.id} className='search-result'>
                                        <div style={{margin: 0, padding: 0, height: '70px'}}>
                                            <img src={p.img.url} className='product-img' alt='Product'/>
                                        </div>
                                        <div className='product-info'>
                                            <p className='product-title'>{p.title}</p>
                                            {
                                                p.sale
                                                    ? <p className='product-price'><span>{p.sale} ₴ </span><span
                                                        className='product-sale'>{p.price} ₴ </span></p>
                                                    : <p className='product-price'><span>{p.price} ₴</span></p>
                                            }
                                        </div>
                                    </article>
                                )
                            })
                            : props.searchMessage
                            ?
                                <div className='search-message'>
                                    За вашим запитом нічого не знайдено.
                                </div>
                            :
                                null
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;