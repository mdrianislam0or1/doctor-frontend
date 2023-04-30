import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { saveprocessAddress } from '../redux/actions/bookingActions';
import CheckoutSteps from '../components/CheckoutSteps';
import Loader from '../components/Loader';

const ConfirmBooking = () => {

    // const processAddress = useSelector(state => state.procssAddress)
    const booking = useSelector(state => state.booking)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister
    const redirect = window.location.search ? window.location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, redirect, userInfo])

    
    // console.log("i am from confirm booking", booking.processAddress)
    console.log("i am from confirm booking", booking.paymentMethod.paymentMethod)
    console.log("i am from confirm booking", booking.bookItems)


  return (
    <div div className='px-20 '>
        <CheckoutSteps step1 step2 step3 step4/>
    <h1>Confirm Order Page</h1>
    <div>
        <div className="flex flex-col sm:flex-row justify-between">
            <div className=' grid grid-cols-4 gap-4 align-middle'>
               <div className=' col-span-1'>
                    <h2>bookinging </h2>
                    <p className="mt-2 text-sm text-black-500">Please confirm your order</p>
                    <p className="mt-2 text-sm text-black-500">{booking.processAddress.address}</p>
                    <p className="mt-2 text-sm text-black-500">{booking.processAddress.name}</p>
                    <p className="mt-2 text-sm text-black-500">{booking.processAddress.email}</p>
                    <p className="mt-2 text-sm text-black-500">{booking.processAddress.postalCode}</p>
                    <p className="mt-2 text-sm text-black-500">{booking.processAddress.country}</p>
                    <p className="mt-2 text-sm text-black-500">{booking.processAddress.phone}</p>
                    <p className="mt-2 text-sm text-black-500">{booking.processAddress.taka}</p>
                    <p className="mt-2 text-sm text-black-500">{booking.processAddress.date}</p>
                    <p className="mt-2 text-sm text-black-500">{booking.processAddress.time}</p>
               </div>
               <div className=' col-span-1'>
                <h2>payment </h2>
                <strong>{booking.paymentMethod.paymentMethod} </strong>
               </div>

               <div className=' col-span-1'>
                    {booking.bookItems.length === 0 ? (<span className>Your Booking Item is Empty</span> ):
                    (
                       <div>
                        {booking.bookItems.map((bookItem, index) =>(
                            <div key={index} className="grid grid-cols-3 gap-4">
                                <div className="col-span-1">
                                    <strong>
                                     <Link to={`/doctors/${bookItem.name}`}>
                                     {bookItem.name}
                                     </Link>
                                        
                                    </strong>
                                    <strong>{bookItem.serial}</strong>
                                </div>
                                <div className="col-span-1">
                                    {bookItem.degree}
                                    {bookItem.address}
                                    {bookItem.email}
                                    {bookItem.phone}
                                    {bookItem.speciality}
                                </div>
                            </div>
                        ))}
                       </div> 
                    )}
               </div>
            </div>
        </div>
    </div>

    {error && <h1>{error}</h1>}
    {loading && <Loader>{loading}</Loader>}
</div>
  )
}

export default ConfirmBooking