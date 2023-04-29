import { BOOKING_ADD_ITEM, BOOKING_REMOVE_ITEM, BOOKING_SAVE_PAYMENT_METHOD, BOOKING_SAVE_PROCESS_ADDRESS } from "../constants/bookingConstant"

export const bookingReducer = (state = { bookItems: [],processAddress: {} }, action) => {
    switch (action.type) {
        case BOOKING_ADD_ITEM:
            const item = action.payload
            const existItem = state.bookItems.find(x => x.doctor === item.doctor)
            if (existItem) {
                return {
                    ...state,
                    bookItems: state.bookItems.map(x => x.doctor === existItem.doctor ? item : x)
                }
            } else {
                return {
                    ...state,
                    bookItems: [...state.bookItems, item]
                }
            }
        case BOOKING_REMOVE_ITEM:
            return {
                ...state,
                bookItems: state.bookItems.filter((x) => x.doctor !== action.payload)
            }
        case BOOKING_SAVE_PROCESS_ADDRESS:
            return {
                ...state,
                processAddress: action.payload,

            }
        // case BOOKING_SAVE_PAYMENT_METHOD:
        //     return {
        //         ...state,
        //         paymentMethod: action.payload,

        //     }
        default:
            return state
    }
}