import React, { useEffect, useState } from 'react';
import './PaymentCard.css';

const PaymentCard = ({ method, card, upi, onPaymentMethodChange, selectedPaymentMethod }) => {

  const [image, setImage] = useState();
  // const [activeDropdown, setActiveDropdown] = useState(null);

  const handleRadioChange = () => {
    onPaymentMethodChange(method);
  };


  useEffect(() => {
    setImage(method === 'UPI' ? upi : card)
  }, [method, upi, card])


  return (
    <div className="paymentCard-outerSection">
      <label className="paymentCard-section">
        <div className="paymentCard-body">
          <div className="paymentCard-body-left">
            <div className="box">
              <img src={image} alt="product image" />
            </div>
            <div className="box">
              <span>{method}</span>
            </div>
          </div>
          <div className="paymentCard-body-right">
            <div className="box">
              <input
                type="radio"
                name={`paymentMethod-${method}`}
                value={method}
                checked={selectedPaymentMethod === method}
                onChange={handleRadioChange}
              />
            </div>
          </div>
        </div>
      </label>
      <div className="dropdown">

        <div className={`upiDropdown ${method === 'UPI' ? 'upiActive' : ''}`}>

          <div className="required-details">
            <span>enter your UPI id <strong>*</strong></span>
            <input type="email" name="email" />
          </div>
          <div className="optional-details">
            <input type="text" name='name' placeholder='Name' />
            <input type="email" name="email" placeholder='someone@example.com' />
          </div>

        </div>

        <div className={`cardDropdown ${method === 'CARDS' ? 'cardActive' : ''}`}>

          <div className="optional-details">
            <input type="text" name='name' placeholder='Name' />
          </div>
          <div className="required-details">
            <input type="number" name="card" placeholder='xxxx-xxxx-xxxx-xxxx' />
            <div className="other-details">
              <input type="number" name='cvv' placeholder='cvv' />
              <input type="date" name='expire' placeholder='expire' />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default PaymentCard;
