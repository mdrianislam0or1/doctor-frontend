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
    <>
    <h1>bookeds</h1>
    {loading ? <Loader/> :error ? <h1>{error}</h1> : <div>
        <table className="">
        <thead>
<tr>
  <th>Id</th>
  <th>User</th>
  <th>Date</th>
  <th>Total</th>
  <th>Paid</th>
  <th>deliver</th>
</tr>
</thead>
<tbody>
{bookeds.map(booked =>(
    <tr key={booked._id}> 
        <td>{booked.name}</td>
        <td>{booked.user && booked.user.name}</td>
        <td>{booked.createdAt.substring(0,10)}</td>
        <td>{booked.taka}</td>    
        <td>{booked.isPaid ? (booked.paidAt.substring(0.10)) : <h1>N/A</h1>}</td>    
        <td>{booked.isDelivered ? (booked.deliveredAt.substring(0.10)) : <h1>N/A</h1>}</td>    
        <td>
            <Link to={`/booked/${booked._id}`}>
                <button>
                    Details
                </button> 
            </Link>
        </td>

    </tr>
))}
</tbody>
        </table>

        </div>}
</>
  )
}

export default BookedListPage