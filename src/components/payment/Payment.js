import React, { useEffect, useState } from 'react'
import './Payment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { checkout, clearErrors } from '../../state/actions/CheckoutActions'
import PaymentCard from './payment card/PaymentCard.js'
import card from '../../images/card.png'
import upi from '../../images/upi.png'

const Payment = ({ paymentMethods, error, totalAmount }) => {

    const dispatch = useDispatch();

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    useEffect(() => {
        if (error) {
            dispatch(clearErrors());
        }

        dispatch(checkout());
    }, [dispatch, error]);

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };


    return (

        <div className="payment-section">
            <div className="payment-body">
                <div className="heading">
                    <Link to='/'>
                        <FontAwesomeIcon className='icon' icon={faChevronLeft} />
                    </Link>
                    <h2>payment</h2>
                </div>
                <div className="payment-methods">
                    <h4>payment methods</h4>
                    {paymentMethods && paymentMethods.map((item) => (
                        <PaymentCard
                            key={item}
                            method={item}
                            card={card}
                            upi={upi}
                            onPaymentMethodChange={handlePaymentMethodChange}
                            selectedPaymentMethod={selectedPaymentMethod}
                        />
                    ))}
                </div>
                <div className="total">
                    <div className="total-amount">
                        <h3>total</h3>
                        <span><FontAwesomeIcon icon={faIndianRupeeSign} /> {totalAmount}</span>
                    </div>
                    <Link to='/paymentStatus' className='payment-btn'>make payment</Link>
                </div>
            </div>
        </div>
    )
}

export default Payment