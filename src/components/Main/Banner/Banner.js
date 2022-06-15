import React from "react";
import arrow from "../../../assets/img/Banner/Arrow.png";

const Banner = props => {
    return (
        <div className='banners'>
            { props.banners.map(b => {
                return (<div className='banner' key={b.id}>
                        <b className='title'>{b.title}</b>
                        <p className='description'>{b.text}</p>
                        <button>
                            {b.button.title}
                            <img src={arrow} alt='icon' />
                        </button>
                    </div>
                )
            }) }
        </div>
    )
}

export default Banner;