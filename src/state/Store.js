import { legacy_createStore as createStore , applyMiddleware , combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { checkoutReducer } from './reducers/CheckoutReducers'

const reducers = combineReducers({

    checkout : checkoutReducer

})

const intialState = {

}

const middleware = [thunk];

const store = createStore(
    reducers,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;