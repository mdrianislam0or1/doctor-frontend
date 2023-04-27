import { DOCTOR_DETAILS_FAIL, DOCTOR_DETAILS_REQUEST, DOCTOR_DETAILS_SUCCESS, DOCTOR_LIST_FAIL, DOCTOR_LIST_REQUEST, DOCTOR_LIST_SUCCESS } from "../constants/doctorConstants"

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

