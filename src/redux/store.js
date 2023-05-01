import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./reducers/userReducers";
import { doctorDetailsReducer, doctorListReducer } from "./reducers/doctorsReducers";
import { bookingReducer } from "./reducers/bookingReducers";
import { bookedCreateReducer, bookedDetailsReducer, bookedPayReducer } from "./reducers/bookReducer";

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
    userUpdateProfile: userUpdateProfileReducer,
    // userList:userListReducer,
    // userDelete:userDeleteReducer,
    // userUpdate:userUpdateReducer,

    bookedCreate: bookedCreateReducer,
    bookedDetails: bookedDetailsReducer,
    bookedPay: bookedPayReducer,
    // orderListMy: orderListMyReducer,
    // orderList: orderListReducer,
    // orderDeliver: orderDeliverReducer,
    
    
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