import cancel_img from "../../../assets/img/Search/cancel.png";

const Cart = props => {

    return (
        <div className='column-container'>
            <div className='cart'>
                <div className='column-header'>
                    <b className='column-title'>Кошик</b>
                    <img className='column-cancel' src={cancel_img} alt='Cancel' onClick={() => alert('qy')}/>
                </div>
            </div>
        </div>
    )
}

export default Cart;