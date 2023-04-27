import axios from "axios"
import { DOCTOR_DETAILS_FAIL, DOCTOR_DETAILS_REQUEST, DOCTOR_DETAILS_SUCCESS, DOCTOR_LIST_FAIL, DOCTOR_LIST_REQUEST, DOCTOR_LIST_SUCCESS } from "../constants/doctorConstants"

//LIST FOR DOCTOR
export const listDoctors = () => async (dispatch) =>{
    try {
        dispatch({type: DOCTOR_LIST_REQUEST})
        // const {data} = await axios.get(`/api/doctors?keyword=${keyword}&pageNumber=${pageNumber}`)
        const {data} = await axios.get(`http://localhost:5000/api/doctors/`)
        dispatch({
            type: DOCTOR_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DOCTOR_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}





//LIST FOR doctor SINGLE DETAILS
export const listDoctorsDetails = (id) => async (dispatch) =>{
    try {
        dispatch({type: DOCTOR_DETAILS_REQUEST})
        const {data} = await axios.get(`http://localhost:5000/api/doctors/${id}`)
        
        dispatch({
            type: DOCTOR_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DOCTOR_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

