import { CHECKOUT_REQUEST, CHECKOUT_SUCCESS, CHECKOUT_FAIL, CLEAR_ERRORS } from '../contants/CheckoutContants'

export const checkoutReducer = (
    (state = { checkout: {} }, 
        action) =>{
            switch (action.type) {
                case CHECKOUT_REQUEST :
                    return{
                        loading : true,
                        ...state 
                    } 

                case CHECKOUT_SUCCESS :
                    return{
                        loading : false,
                        orderItems : action.payload.products,
                        paymentMethods : action.payload.paymentMethods
                    } 

                case CHECKOUT_FAIL :
                    return{
                        loading : false,
                        error : action.payload 
                    } 

                case CLEAR_ERRORS :
                    return{
                        ...state,
                        error : null 
                    } 

                default :
                    return{
                        state 
                    } 
            }
        }
)