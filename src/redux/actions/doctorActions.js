import axios from "axios";
import {
    DOCTOR_CREATE_FAIL,
    DOCTOR_CREATE_REQUEST,
  DOCTOR_CREATE_SUCCESS,
  DOCTOR_DELETE_FAIL,
  DOCTOR_DELETE_REQUEST,
  DOCTOR_DELETE_SUCCESS,
  DOCTOR_DETAILS_FAIL,
  DOCTOR_DETAILS_REQUEST,
  DOCTOR_DETAILS_SUCCESS,
  DOCTOR_LIST_FAIL,
  DOCTOR_LIST_REQUEST,
  DOCTOR_LIST_SUCCESS,
} from "../constants/doctorConstants";

//LIST FOR DOCTOR
export const listDoctors = () => async (dispatch) => {
  try {
    dispatch({ type: DOCTOR_LIST_REQUEST });
    // const {data} = await axios.get(`/api/doctors?keyword=${keyword}&pageNumber=${pageNumber}`)
    const { data } = await axios.get(`http://localhost:5000/api/doctors/`);
    dispatch({
      type: DOCTOR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOCTOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//LIST FOR doctor SINGLE DETAILS
export const listDoctorsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DOCTOR_DETAILS_REQUEST });
    const { data } = await axios.get(`http://localhost:5000/api/doctors/${id}`);

    dispatch({
      type: DOCTOR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOCTOR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// //TOP PRODUCT
// export const listTopProducts = () => async (dispatch) =>{
//     try {
//         dispatch({type: DOCTOR_TOP_REQUEST})
//         const {data} = await axios.get(`/api/products/top`)

//         dispatch({
//             type: DOCTOR_TOP_SUCCESS,
//             payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: DOCTOR_TOP_FAIL,
//             payload: error.response && error.response.data.message ? error.response.data.message : error.message
//         })
//     }
// }

// DELETE Doctor BY ADMIN

export const deleteDoctor = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DOCTOR_DELETE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const confiq = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`http://localhost:5000/api/doctors/${id}`, confiq);
    dispatch({
      type: DOCTOR_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DOCTOR_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// CREATE DoctorS BY ADMIN

export const createDoctor =() =>async(dispatch,getState)=>{

    try{
        dispatch({
            type:DOCTOR_CREATE_REQUEST,
        })
        const{
            userLogin:{userInfo},
        }=getState()
        const confiq ={
            headers:{
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
      const {data} =  await axios.post(`http://localhost:5000/api/doctors`,{},confiq)
        dispatch({
            type: DOCTOR_CREATE_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type:DOCTOR_CREATE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}




// // UPDATE PRODUCTS BY ADMIN

// export const updateProduct =(product) =>async(dispatch,getState)=>{

//     try{
//         dispatch({
//             type:DOCTOR_UPDATE_REQUEST,
//         })
//         const{
//             userLogin:{userInfo},
//         }=getState()
//         const confiq ={
//             headers:{
//                 'Content-Type':'application/json',
//                 Authorization: `Bearer ${userInfo.token}`,
//             },
//         }
//       const {data} =  await axios.put(`/api/products/${product._id}`,product,confiq)

//         dispatch({
//             type: DOCTOR_UPDATE_SUCCESS,
//             payload: data
//         })
//     }catch(error){
//         dispatch({
//             type:DOCTOR_UPDATE_FAIL,
//             payload:error.response && error.response.data.message ? error.response.data.message : error.message,
//         })
//     }
// }

// // REVIEW CREATE PRODUCT

// export const createProductReview =(productId,review) =>async(dispatch,getState)=>{

//     try{
//         dispatch({
//             type:DOCTOR_CREATE_REVIEW_REQUEST,
//         })
//         const{
//             userLogin:{userInfo},
//         }=getState()
//         const confiq ={
//             headers:{
//                 'Content-Type':'application/json',
//                 Authorization: `Bearer ${userInfo.token}`,
//             },
//         }
//              await axios.post(`/api/products/${productId}/reviews`,review,confiq)

//         dispatch({
//             type: DOCTOR_CREATE_REVIEW_SUCCESS,
//         })
//     }catch(error){
//         dispatch({
//             type:DOCTOR_CREATE_REVIEW_FAIL,
//             payload:error.response && error.response.data.message ? error.response.data.message : error.message,
//         })
//     }
// }
