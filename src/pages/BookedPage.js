import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getBookedDetails } from '../redux/actions/bookActions';
import Loader from '../components/Loader';

const BookedPage = () => {

    
        const booking = useSelector(state => state.booking)
        const params = useParams()
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const bookedId = params.id;
    

    
        //POST TO BACKEND
        const bookedDetails = useSelector(state => state.bookedDetails)
        const {booked, error, loading } = bookedDetails
    
    
        useEffect(() => {
            dispatch(getBookedDetails(bookedId))
        }, [dispatch,bookedId])
    
    
        const confirmBooking = () => {
    
        }



  return loading ? <Loader/> : error ? <h1>{error}</h1> : <>
  
  <div div className='px-20 '>
            <h1>Confirm Booke Details Page {booked._id}</h1>
            <h1>Confirm Booke Details Page {booked.email}</h1>
            <div>
                <div className="flex flex-col sm:flex-row justify-between">
                    <div className=' grid grid-cols-4 gap-4 align-middle'>
                        <div className=' col-span-1'>
                            <h2>bookinging </h2>
                            <p className="mt-2 text-sm text-black-500">Please confirm your order</p>
                            <p className="mt-2 text-sm text-black-500">{booked.address}</p>
                            <p className="mt-2 text-sm text-black-500">{booked.name}</p>
                            <p className="mt-2 text-sm text-black-500">{booked.email}</p>
                            <p className="mt-2 text-sm text-black-500">{booked.postalCode}</p>
                            <p className="mt-2 text-sm text-black-500">{booked.country}</p>
                            <p className="mt-2 text-sm text-black-500">{booked.phone}</p>
                            <p className="mt-2 text-sm text-black-500">{booked.taka}</p>
                            <p className="mt-2 text-sm text-black-500">{booked.date}</p>
                            <p className="mt-2 text-sm text-black-500">{booked.time}</p>
                            <p className="mt-2 text-sm text-black-500">{booked.status}</p>
                        
                        {booked.isDelivered ? <h1>{booked.deliveredAt}</h1> : <h1>Not delivered</h1>}


                        </div>
                        <div className=' col-span-1'>
                            <h2>payment </h2>
                            <strong>{booking.paymentMethod.paymentMethod} </strong>
                        </div>

                        <div className=' col-span-1'>
                            {booked.bookItems.length === 0 ? (<span className>Your booked Item is Empty</span>) :
                                (
                                    <div>
                                        {booked.bookItems.map((bookItem, index) => (
                                            <div key={index} className="grid grid-cols-4 gap-4">
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

                                                {error && <h1>{error}</h1>}

                                                <div className="col-span-1">
                                                    <strong>
                                                        Amount : {booking.processAddress.taka}
                                                    </strong>
                                                    {booked.isPaid ? <h1>{booked.paidAt}</h1> : <h1>Not Paid</h1>}



                                                    <strong>
                                                        
                                                        <button className=' bg-pink-300 text-base rounded-md'
                                                            disabled={booking.bookItems === 0}
                                                            onClick={confirmBooking}
                                                        >
                                                            Book Confirm
                                                        </button>
                                                    </strong>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
}

export default BookedPage