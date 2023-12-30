import React, { useEffect } from 'react'
import './Checkout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faLocationDot, faPhone , faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { checkout, clearErrors } from '../../state/actions/CheckoutActions'
import OrderItemCard from './order item card/OrderItemCard'

const Checkout = ({ products , error , orderAmount , deliveryFee , discount , totalAmount }) => {

    const dispatch = useDispatch();

    useEffect(() => {

        if (error) {
            dispatch(clearErrors())
        }

        dispatch(checkout())

    }, [dispatch, error])

    return (

        <div className="checkout-section">
            <div className="checkout-body">
                <div className="heading">
                    <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                    <h2>checkout</h2>
                </div>
                <div className="delivery-detail">
                    <h3>delivery detail</h3>
                    <span className='address'> <FontAwesomeIcon className='icon' icon={faLocationDot} />electronic city, banglore</span>
                    <span className='phone'><FontAwesomeIcon className='icon' icon={faPhone} /> 8300-002334</span>
                </div>
                <div className="order-list">
                    <h4>order list</h4>
                    {products && products.map((item) => (
                        <OrderItemCard product={item} key={item.id} />
                    ))}
                </div>
                <div className="promo-code">
                    <h4>promo code</h4>
                    <div className="code">
                        <input type="text" name='code' placeholder='PROMOXCODE' />
                        <div className="promo-code-btn">apply</div>
                    </div>
                </div>
                <div className="order-summary">
                    <h3>order summary</h3>
                    <div className="order-amount">
                        <span>order amount</span>
                        <span><FontAwesomeIcon icon={faIndianRupeeSign} /> {orderAmount}</span>
                    </div>
                    <div className="delivery-fee">
                        <span>delivery fee</span>
                        <span><FontAwesomeIcon icon={faIndianRupeeSign} /> {deliveryFee}</span>
                    </div>
                    <div className="discount">
                        <span>discount</span>
                        <span><FontAwesomeIcon icon={faIndianRupeeSign} /> {discount}</span>
                    </div>
                </div>
                <div className="total">
                    <div className="total-amount">
                        <h3>total</h3>
                        <span><FontAwesomeIcon icon={faIndianRupeeSign} /> {totalAmount}</span>
                    </div>
                    <Link to='/payment' className='payment-btn'>payment</Link>
                </div>
            </div>
        </div>

    )
}

export default Checkout