

const Filter = props => {
    return (
        <div className='filter'>
            <div className='filter-options'>
                {
                    props.filters.map((f,i) => {
                        return <select key={i} className='filter-option' id={f.title} onChange={ e => props.setFilter(e)}>
                            { f.options.map(o => {
                                return <option key={o.id} value={o.id}>{o.title}</option>
                            }) }
                        </select>
                    })
                }
            </div>
            <span className='total'>{props.totalProducts} всього</span>
        </div>
    )
}

export default Filter;