import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userDeleteReducer, userDetailsReducer, userListReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer, userUpdateReducer } from "./reducers/userReducers";
import {  doctorCreateReducer, doctorDeleteReducer, doctorDetailsReducer, doctorListReducer, doctorReviewCreateReducer, doctorUpdateReducer } from "./reducers/doctorsReducers";
import { bookingReducer } from "./reducers/bookingReducers";
import { bookedCreateReducer, bookedDeliverReducer, bookedDetailsReducer, bookedListMyReducer, bookedListReducer, bookedPayReducer } from "./reducers/bookReducer";

const reducer = combineReducers({
    // doctorList
    doctorList: doctorListReducer,
    doctorDetails: doctorDetailsReducer,
    doctorDelete: doctorDeleteReducer,
    doctorCreate: doctorCreateReducer,
    doctorUpdate: doctorUpdateReducer,
    doctorReviewCreate: doctorReviewCreateReducer,
    // doctorTopRatedReducer:doctorTopRatedReducer,
    booking: bookingReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    userUpdate:userUpdateReducer,

    bookedCreate: bookedCreateReducer,
    bookedDetails: bookedDetailsReducer,
    bookedPay: bookedPayReducer,
    bookedListMy: bookedListMyReducer,
    bookedList: bookedListReducer,
    bookedDeliver: bookedDeliverReducer,
    
    
})

const bookItemsFromStorage = localStorage.getItem('bookItems') ? JSON.parse(localStorage.getItem('bookItems')) : []


const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const processAddressFromStorage = localStorage.getItem('processAddress') ? JSON.parse(localStorage.getItem('processAddress')) : {}


const initialState = {
    book: {
        bookItems: bookItemsFromStorage,
        processAddress: processAddressFromStorage,
    },
    userLogin:{userInfo: userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store