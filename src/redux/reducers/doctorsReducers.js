import { DOCTOR_CREATE_FAIL, DOCTOR_CREATE_REQUEST, DOCTOR_CREATE_RESET, DOCTOR_CREATE_REVIEW_FAIL, DOCTOR_CREATE_REVIEW_REQUEST, DOCTOR_CREATE_REVIEW_RESET, DOCTOR_CREATE_REVIEW_SUCCESS, DOCTOR_CREATE_SUCCESS, DOCTOR_DELETE_FAIL, DOCTOR_DELETE_REQUEST, DOCTOR_DELETE_SUCCESS, DOCTOR_DETAILS_FAIL, DOCTOR_DETAILS_REQUEST, DOCTOR_DETAILS_SUCCESS, DOCTOR_LIST_FAIL, DOCTOR_LIST_REQUEST, DOCTOR_LIST_SUCCESS, DOCTOR_UPDATE_FAIL, DOCTOR_UPDATE_REQUEST, DOCTOR_UPDATE_RESET, DOCTOR_UPDATE_SUCCESS } from "../constants/doctorConstants"

//DOCTOR LIST REDUCER
export const doctorListReducer = (state = { doctors: [] }, action) => {
    switch (action.type) {
        case DOCTOR_LIST_REQUEST:
            return { loading: true, doctors: [] }
        case DOCTOR_LIST_SUCCESS:
            return { loading: false, doctors: action.payload}
            // return { loading: false, doctors: action.payload.doctors,pages: action.payload.pages,page: action.payload.page }
        case DOCTOR_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


//doctor DETAILS REDUCER
export const doctorDetailsReducer = (state = { doctor: [] }, action) => {
    switch (action.type) {
        case DOCTOR_DETAILS_REQUEST:
            return { loading: true, ...state}
        case DOCTOR_DETAILS_SUCCESS:
            return { loading: false, doctor: action.payload }
        case DOCTOR_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


//PRODUCT DELETE REDUCER
export const doctorDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DOCTOR_DELETE_REQUEST:
            return { loading: true }
        case DOCTOR_DELETE_SUCCESS:
            return { loading: false, success:true }
        case DOCTOR_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


//DOCTOR CREATE REDUCER
export const doctorCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case DOCTOR_CREATE_REQUEST:
            return { loading: true }
        case DOCTOR_CREATE_SUCCESS:
            return { loading: false, success:true, doctor:action.payload }
        case DOCTOR_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case DOCTOR_CREATE_RESET:
            return {}
        default:
            return state
    }
}





//doctor UPDATE REDUCER
export const doctorUpdateReducer = (state = {doctor : {}}, action) => {
    switch (action.type) {
        case DOCTOR_UPDATE_REQUEST:
            return { loading: true }
        case DOCTOR_UPDATE_SUCCESS:
            return { loading: false, success:true, doctor:action.payload }
        case DOCTOR_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case DOCTOR_UPDATE_RESET:
            return {doctor:{}}
        default:
            return state
    }
}





//doctor REVIEW
export const doctorReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case DOCTOR_CREATE_REVIEW_REQUEST:
            return { loading: true }
        case DOCTOR_CREATE_REVIEW_SUCCESS:
            return { loading: false, success:true}
        case DOCTOR_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }
        case DOCTOR_CREATE_REVIEW_RESET:
            return {}
        default:
            return state
    }
}




// //TOP doctor
// export const productTopRatedReducer = (state = {products: []}, action) => {
//     switch (action.type) {
//         case DOCTOR_TOP_REQUEST:
//             return { loading: true, products:[] }
//         case DOCTOR_TOP_SUCCESS:
//             return { loading: false, products: action.payload}
//         case DOCTOR_TOP_FAIL:
//             return { loading: false, error: action.payload }
//         default:
//             return state
//     }
// }