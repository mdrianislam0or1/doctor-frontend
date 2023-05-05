import axios from "axios"
import { BOOKED_CREATE_FAIL, BOOKED_CREATE_REQUEST, BOOKED_CREATE_SUCCESS, BOOKED_DETAILS_FAIL, BOOKED_DETAILS_REQUEST, BOOKED_DETAILS_SUCCESS, BOOKED_LIST_MY_FAIL, BOOKED_LIST_MY_REQUEST, BOOKED_LIST_MY_SUCCESS, BOOKED_PAY_FAIL, BOOKED_PAY_REQUEST, BOOKED_PAY_SUCCESS } from "../constants/bookConstant"

//Booked Create
export const createBooked =(booked) => async (dispatch,getState) =>{
    try{
        dispatch({
            type: BOOKED_CREATE_REQUEST,
        })

        const{
            userLogin:{userInfo},
        } = getState()

        const config ={
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const {data} = await axios.post(`http://localhost:5000/api/booked`,booked,config)

        dispatch({
            type: BOOKED_CREATE_SUCCESS,
            payload: data,
        })
    }catch(error){
        dispatch({
            type: BOOKED_CREATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

//BOOKED DETAILS GET /books - GET /booked/:id

export const getBookedDetails =(id) => async (dispatch,getState) =>{
    try{
        dispatch({
            type: BOOKED_DETAILS_REQUEST,
        })

        const{
            userLogin:{userInfo},
        } = getState()

        const config ={
            headers:{
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const {data} = await axios.get(`http://localhost:5000/api/booked/${id}`,config)

        dispatch({
            type: BOOKED_DETAILS_SUCCESS,
            payload: data,
        })
    }catch(error){
        dispatch({
            type: BOOKED_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}




//PAY BOOKED


export const payBooked =(bookedId,paymentResult) => async (dispatch,getState) =>{
    try{
        dispatch({
            type: BOOKED_PAY_REQUEST,
        })

        const{
            userLogin:{userInfo},
        } = getState()

        const config ={
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const {data} = await axios.put(`http://localhost:5000/api/booked/${bookedId}/pay`,paymentResult,config)

        dispatch({
            type: BOOKED_PAY_SUCCESS,
            payload: data,
        })
    }catch(error){
        dispatch({
            type: BOOKED_PAY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}




// //DELIVER ORDER


// export const deliverOrder =(order) => async (dispatch,getState) =>{
//     try{
//         dispatch({
//             type: BOOKED_DELIVER_REQUEST,
//         })

//         const{
//             userLogin:{userInfo},
//         } = getState()

//         const config ={
//             headers:{
//                 Authorization: `Bearer ${userInfo.token}`,
//             },
//         }

//         const {data} = await axios.put(`/api/orders/${order._id}/deliver`,{},config)

//         dispatch({
//             type: BOOKED_DELIVER_SUCCESS,
//             payload: data,
//         })
//     }catch(error){
//         dispatch({
//             type: BOOKED_DELIVER_FAIL,
//             payload: error.response && error.response.data.message ? error.response.data.message : error.message,
//         })
//     }
// }




//MY LIST BOOKEDS
export const listMyBookeds =() => async (dispatch,getState) =>{
    try{
        dispatch({
            type: BOOKED_LIST_MY_REQUEST,
        })

        const{
            userLogin:{userInfo},
        } = getState()

        const config ={
            headers:{
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const {data} = await axios.get(`http://localhost:5000/api/booked/mybookings`,config)

        dispatch({
            type: BOOKED_LIST_MY_SUCCESS,
            payload: data,
        })
    }catch(error){
        dispatch({
            type: BOOKED_LIST_MY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}



// //LIST ORDER


// export const listOrders =() => async (dispatch,getState) =>{
//     try{
//         dispatch({
//             type: BOOKED_LIST_REQUEST,
//         })

//         const{
//             userLogin:{userInfo},
//         } = getState()

//         const config ={
//             headers:{
//                 Authorization: `Bearer ${userInfo.token}`,
//             },
//         }

//         const {data} = await axios.get(`/api/orders`,config)

//         dispatch({
//             type: BOOKED_LIST_SUCCESS,
//             payload: data,
//         })
//     }catch(error){
//         dispatch({
//             type: BOOKED_LIST_FAIL,
//             payload: error.response && error.response.data.message ? error.response.data.message : error.message,
//         })
//     }
// }