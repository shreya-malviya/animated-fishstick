import React from 'react'
import './PaymentStatus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck , faCircleXmark , faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const PaymentStatus = () => {

    let posibilities = Math.random() * 3;
    posibilities = Math.ceil(posibilities)

    return (

        <div className="paymentStatus-section">
            <div className="paymentStatus-body">
                {posibilities === 1
                    ?
                    <h2 style={{color : "#22bb33"}}>payment successful <FontAwesomeIcon className='icon' icon={faCircleCheck} beatFade /> </h2>
                    :
                    posibilities === 2
                    ?
                    <h2 style={{color : "#bb2124"}} >payment failed <FontAwesomeIcon className='icon' icon={faCircleXmark} beatFade /></h2>
                    :
                    posibilities === 3
                    ?
                    <h2 style={{color : "#ffcc00"}} >payment pending <FontAwesomeIcon className='icon' icon={faTriangleExclamation} beatFade /></h2>
                    :
                    ""
            }
            </div>
        </div>

    )
}

export default PaymentStatus