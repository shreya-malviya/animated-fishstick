import React from 'react'
import './OrderItemCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faMinus , faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'

const OrderItemCard = ({ product }) => {

  const price = product.price.toFixed(2);
  const quantity = product.quantity;
  const totalPrice = (price * quantity).toFixed(2);

  return (

    <div className="orderItemCard-section">
      <div className="orderItemCard-body">

        <div className="orderItemCard-body-left">

          <div className="box">
            <img src={product.image} alt="product image" />
          </div>
          <div className="box">
            <span>{product.title}</span>
            <span style={{fontWeight : "bold"}}>{price} * {quantity} =  <FontAwesomeIcon icon={faIndianRupeeSign} /> {totalPrice}</span>
          </div>


        </div>

        <div className="orderItemCard-body-right">

          <div className="box">
            <span><FontAwesomeIcon className='icon' icon={faMinus} /></span>
          </div>
          <div className="box">
            <span><FontAwesomeIcon className='icon' icon={faPlus} /></span>
          </div>
          <div className="box">
            <span><FontAwesomeIcon className='icon' icon={faTrash} /></span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default OrderItemCard