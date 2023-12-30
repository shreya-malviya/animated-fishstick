import { CHECKOUT_REQUEST , CHECKOUT_SUCCESS , CHECKOUT_FAIL , CLEAR_ERRORS } from "../contants/CheckoutContants";

import axios from 'axios'

export const checkout = () => async (dispatch) => {

    try {

        dispatch({
            type : CHECKOUT_REQUEST,
        })

        const url = 'https://groww-intern-assignment.vercel.app/v1/api/order-details';

        const {data} = await axios.get(url)

        dispatch({
            type : CHECKOUT_SUCCESS,
            payload : data
        })
        
    } catch (error) {
        
        dispatch({
            type : CHECKOUT_FAIL,
            error : 'ERROR OCCURED'
        })

    }

}

export const clearErrors = () => async (dispatch) => {

    dispatch({
        type : CLEAR_ERRORS,
    })

}