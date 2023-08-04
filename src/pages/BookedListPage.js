import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listBookeds } from '../redux/actions/bookActions'

const BookedListPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //booked List
    const bookedList = useSelector(state =>state.bookedList)
    const {loading,error,bookeds} = bookedList
    //user Login    
    const userLogin = useSelector(state =>state.userLogin)
    const {userInfo} = userLogin
 
    useEffect(()=>{
        if(userInfo && userInfo.isAdmin){
            dispatch(listBookeds())
        }else{
            navigate("/login")
        }
        
    },[dispatch,userInfo]);


  return (
    <div className='px-10 container mx-auto'>
    <h1>Booking List</h1>
    {loading ? <Loader/> :error ? <h1>{error}</h1> : 
    <div className='relative overflow-x-auto'>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
<tr>
  <th scope="col" className="px-6 py-3">Name</th>
  {/* <th >User</th> */}
  <th scope="col" className="px-6 py-3">Date</th>
  <th scope="col" className="px-6 py-3">Total</th>
  <th scope="col" className="px-6 py-3">Paid</th>
  <th scope="col" className="px-6 py-3">Visited</th>
  <th scope="col" className="px-6 py-3">Details</th>
</tr>
</thead>
<tbody>
{bookeds.map(booked =>(
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={booked?._id}> 
        <th  scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{booked?.name}</th>
        {/* <td className="px-6 py-4">{booked?.user && booked?.user.name}</td> */}
        <td className="px-6 py-4">{booked?.createdAt.substring(0,10)}</td>
        <td className="px-6 py-4">{booked?.taka}</td>    
        <td className="px-6 py-4">{booked?.isPaid ? <p>Yes</p> : <h1>N/A</h1>}</td>    
        <td className="px-6 py-4">{booked?.isDelivered ? <p>Yes</p> : <h1>N/A</h1>}</td>    
        <td className="px-6 py-4">
            <Link to={`/booked/${booked?._id}`}>
                <button className='mt-3 rounded-b-lg bg-fuchsia-950 text-white
                                      py-2 px-3'>
                    Details
                </button> 
            </Link>
        </td>

    </tr>
))}
</tbody>
        </table>

        </div>}
</div>
  )
}

export default BookedListPage