import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userDetailsReducer, userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { doctorDetailsReducer, doctorListReducer } from "./reducers/doctorsReducers";
import { bookingReducer } from "./reducers/bookingReducers";

const reducer = combineReducers({
    // doctorList
    doctorList: doctorListReducer,
    doctorDetails: doctorDetailsReducer,
    // doctorDelete: doctorDeleteReducer,
    // doctorCreate: doctorCreateReducer,
    // doctorUpdate: doctorUpdateReducer,
    // doctorReviewCreate: doctorReviewCreateReducer,
    // doctorTopRatedReducer:doctorTopRatedReducer,
    booking: bookingReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails:userDetailsReducer,
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

const bookItemsFromStorage = localStorage.getItem('bookItems') ? JSON.parse(localStorage.getItem('bookItems')) : []


const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

// const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
    book: {bookItems: bookItemsFromStorage,
        // shippingAddress: shippingAddressFromStorage,
    },
    userLogin:{userInfo: userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store