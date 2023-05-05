import { BOOKED_CREATE_FAIL, BOOKED_CREATE_REQUEST, BOOKED_CREATE_SUCCESS, BOOKED_DETAILS_FAIL, BOOKED_DETAILS_REQUEST, BOOKED_DETAILS_SUCCESS, BOOKED_LIST_MY_FAIL, BOOKED_LIST_MY_REQUEST, BOOKED_LIST_MY_RESET, BOOKED_LIST_MY_SUCCESS, BOOKED_PAY_FAIL, BOOKED_PAY_REQUEST, BOOKED_PAY_RESET, BOOKED_PAY_SUCCESS } from "../constants/bookConstant"

export const bookedCreateReducer =(state ={},action)=>{
    switch(action.type){
        case BOOKED_CREATE_REQUEST:
            return{
                loading: true
            }
            case BOOKED_CREATE_SUCCESS:
                return{
                    loading: false,
                    success: true,
                    booked: action.payload,
                }
            case BOOKED_CREATE_FAIL:
                return{
                    loading: false,
                    error: action.payload,
                }

            default:
                return state
                
    }
}

//BOOKED DETAILS


export const bookedDetailsReducer =(state ={loading: true,bookedItems:[]},action)=>{
    switch(action.type){
        case BOOKED_DETAILS_REQUEST:
            return{
                ...state,
                loading: true
            }
            case BOOKED_DETAILS_SUCCESS:
                return{
                    loading: false,
                    booked: action.payload,
                }
            case BOOKED_DETAILS_FAIL:
                return{
                    loading: false,
                    error: action.payload,
                }

            default:
                return state
                
    }
}

//BOOOKED PAY

export const bookedPayReducer =(state ={},action)=>{
    switch(action.type){
        case BOOKED_PAY_REQUEST:
            return{
                
                loading: true
            }
            case BOOKED_PAY_SUCCESS:
                return{
                    loading: false,
                    success: true,
                }
            case BOOKED_PAY_FAIL:
                return{
                    loading: false,
                    error: action.payload,
                }
            case BOOKED_PAY_RESET:
                return{}

            default:
                return state
                
    }
}






export const bookedListMyReducer =(state ={bookeds:[]},action)=>{
    switch(action.type){
        case BOOKED_LIST_MY_REQUEST:
            return{
                
                loading: true
            }
            case BOOKED_LIST_MY_SUCCESS:
                return{
                    loading: false,
                    bookeds: action.payload,
                }
            case BOOKED_LIST_MY_FAIL:
                return{
                    loading: false,
                    error: action.payload,
                }
            case BOOKED_LIST_MY_RESET:
                return{
                    bookeds: []
                }
            default:
                return state
                
    }
}


// //ALL booked LIST

// export const bookedListReducer =(state ={bookeds:[]},action)=>{
//     switch(action.type){
//         case BOOKED_LIST_REQUEST:
//             return{
                
//                 loading: true
//             }
//             case BOOKED_LIST_SUCCESS:
//                 return{
//                     loading: false,
//                     bookeds: action.payload,
//                 }
//             case BOOKED_LIST_FAIL:
//                 return{
//                     loading: false,
//                     error: action.payload,
//                 }
//             default:
//                 return state
                
//     }
// }


// //DELIVER LIST



// export const bookedDeliverReducer =(state ={},action)=>{
//     switch(action.type){
//         case BOOKED_DELIVER_REQUEST:
//             return{
                
//                 loading: true
//             }
//             case BOOKED_DELIVER_SUCCESS:
//                 return{
//                     loading: false,
//                     success: true,
//                 }
//             case BOOKED_DELIVER_FAIL:
//                 return{
//                     loading: false,
//                     error: action.payload,
//                 }
//             case BOOKED_DELIVER_RESET:
//                 return{}

//             default:
//                 return state
                
//     }
// }
