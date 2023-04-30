import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addToBook, removeFromBooking } from '../redux/actions/bookingActions'

const BookingPage = () => {

    const params = useParams()
    const navigate = useNavigate()
    const doctorId = params.id;
    const serialNumber = window.location.search ? Number(window.location.search.split('=')[1]) : 1
    console.log(serialNumber)

    const dispatch = useDispatch()
    useEffect(() => {
        if (doctorId) {
            dispatch(addToBook(doctorId, serialNumber))
        }
    }, [dispatch, doctorId, serialNumber])


    //USESELECTORS
    const booking = useSelector((state) => state.booking)
    const { bookItems } = booking

    // const bookItems = useSelector(state => state.bookItems)


    const removeFromBookHandler = (id) => {
        dispatch(removeFromBooking(id))
        console.log("remove")
    }

    const processHandler = () => {
        navigate(`/login/redirect=process`)
        console.log("process")
    }
    return (
        <div>BookingPage
            {bookItems?.length === 0 ? (
                <Link to="/">
                    Go to Home
                </Link>
            ) : (
                <div>
                    {bookItems?.map((bookItem) => (
                            <div className='grid grid-cols-4 gap-4'>
                                <div key={bookItem._id}>
                            <Link to={`/doctor/${bookItem.doctor}`}>
                                <h1>{bookItem.name}</h1>
                                <p>{bookItem.phone}</p>
                                <p>{bookItem.address}</p>
                                </Link>
                                <button className='p-5 bg-indigo-500' onClick={() => navigate(`/book/${bookItem._id}`)}>Book</button>
                                <button type='button'onClick={()=> removeFromBookHandler(bookItem.doctor)}>
                                    Remove From Book 
                                </button>
                        </div>

                            <div >
                                <button onClick={()=> processHandler()} disabled={bookItems.length === 0}>
                                    Process
                                </button>
                            </div>
                            </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default BookingPage