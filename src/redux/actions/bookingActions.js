import axios from 'axios'
import { BOOKING_ADD_ITEM, BOOKING_REMOVE_ITEM, BOOKING_SAVE_PROCESS_ADDRESS } from '../constants/bookingConstant'
export const addToBook = (id,serialNumber)=> async(dispatch,getState) =>{
    const {data} = await axios.get(`http://localhost:5000/api/doctors/${id}`)

    dispatch({
        type: BOOKING_ADD_ITEM,
        payload:{
            doctor: data._id,
            name: data.name,
            image:data.image,
            phone: data.phone,
            address: data.address,
            email: data.email,
            speciality: data.speciality,
            degree: data.degree,
            serial: data.serial,
            serialNumber
        }
    })

    localStorage.setItem('bookItems',JSON.stringify(getState().book.bookItems))
}



export const removeFromBooking = (id) =>(dispatch,getState) =>{
    dispatch({
        type: BOOKING_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('bookItems',JSON.stringify(getState().book.bookItems))
} 


export const saveProcessAddress =(data) =>(dispatch) =>{
    dispatch({
        type: BOOKING_SAVE_PROCESS_ADDRESS,
        payload: data,
    })

    localStorage.setItem('processAddress', JSON.stringify(data))
}



// export const savePaymentMethod =(data) =>(dispatch) =>{
//     dispatch({
//         type: BOOKING_SAVE_PAYMENT_METHOD,
//         payload: data,
//     })

//     localStorage.setItem('paymentMethod', JSON.stringify(data))
// }


