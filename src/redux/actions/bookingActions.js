import axios from 'axios'
import { BOOKING_ADD_ITEM } from '../constants/bookingConstant'
export const addToBook = (id,serialNumber)=> async(dispatch,getState) =>{
    const {data} = await axios.get(`/api/doctors/${id}`)

    dispatch({
        type: BOOKING_ADD_ITEM,
        payload:{
            doctor: data._id,
            name: data.name,
            image:data.image,
            price:data.price,
            serial: data.serial,
            serialNumber
        }
    })

    localStorage.setItem('bookItems',JSON.stringify(getState().book.bookItems))
}
