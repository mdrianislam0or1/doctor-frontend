import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userLoginReducer } from "./reducers/userReducers";
import { doctorDetailsReducer, doctorListReducer } from "./reducers/doctorsReducers";

const reducer = combineReducers({
    // doctorList
    doctorList: doctorListReducer,
    doctorDetails: doctorDetailsReducer,
    // doctorDelete: doctorDeleteReducer,
    // doctorCreate: doctorCreateReducer,
    // doctorUpdate: doctorUpdateReducer,
    // doctorReviewCreate: doctorReviewCreateReducer,
    // doctorTopRatedReducer:doctorTopRatedReducer,
    // cart: cartReducer,
    userLogin: userLoginReducer,
    // userRegister: userRegisterReducer,
    // userDetails:userDetailsReducer,
    // userUpdateProfile: userUpdateProfileReducer,
    // userList:userListReducer,
    // userDelete:userDeleteReducer,
    // userUpdate:userUpdateReducer,

    // orderCreate: orderCreateReducer,
    // orderDetails: orderDetailsReducer,
    // orderPay: orderPayReducer,
    // orderListMy: orderListMyReducer,
    // orderList: orderListReducer,
    // orderDeliver: orderDeliverReducer,
    
    
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []


const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
    // cart: {cartItems: cartItemsFromStorage,
    //     shippingAddress: shippingAddressFromStorage,
    // },
    // userLogin:{userInfo: userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store