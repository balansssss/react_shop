import React from "react";
import arrow from "../../../assets/img/Banner/Arrow.png";
import prev from "../../../assets/img/ProductsBlock/prev.png";
import next from "../../../assets/img/ProductsBlock/next.png";

const Banner = props => {
    return (
        <div className='banners_container'>
            <div className='banners'>
                { props.banners.map(b => {
                    return (<div className={`banner ${b.className}`}
                                 key={b.id} >
                            <b className='title'>{b.title}</b>
                            <p className='description'>{b.text}</p>
                            <button onClick={props.openPage}>
                                {b.button.title}
                                <img src={arrow} alt='icon' />
                            </button>
                        </div>
                    )
                }) }
            </div>
            <div className='nav'>
                <button>
                    <img src={prev} alt='Prev' onClick={props.prevBanner} />
                </button>
                <button>
                    <img src={next} alt='Next' onClick={props.nextBanner} />
                </button>
            </div>
        </div>
    )
}

export default Banner;