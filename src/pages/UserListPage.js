import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, listUsers } from '../redux/actions/userAction'
import Loader from '../components/Loader'
import { Link, useNavigate } from 'react-router-dom'

const UserListPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //user List
    const userList = useSelector(state =>state.userList)
    const {loading,error,users} = userList
    //user Login    
    const userLogin = useSelector(state =>state.userLogin)
    const {userInfo} = userLogin
    //userDelete
    const userDelete = useSelector(state =>state.userDelete)
    const {success:successDelete} = userDelete
    
    useEffect(()=>{
        if(userInfo && userInfo.isAdmin){
            dispatch(listUsers())
        }else{
            navigate("/login")
        }
        
    },[dispatch,successDelete])

    const deleteHandler =(id) =>{
        if(window.confirm("Are you sure you want to delete")){
            dispatch(deleteUser(id))
        }

    }
  return (
    <div className='px-10 container mx-auto'>
        <h1>Users</h1>
        {loading ? <Loader/> :error ? <h1>{error}</h1> : 
          <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" className="px-6 py-3" >Id</th>
      <th scope="col" className="px-6 py-3">Name</th>
      <th scope="col" className="px-6 py-3">Email</th>
      <th scope="col" className="px-6 py-3">Admin</th>
      <th scope="col" className="px-6 py-3">Action</th>
      <th scope="col" className="px-6 py-3">Role</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user =>(
        <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"> 
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.name}</td>
            <td className="px-6 py-4">{user.email}</td>
            <td className="px-6 py-4">{user.isAdmin ? <h1>Admin</h1> : <h1>N/A</h1>}</td>    
            <td className="px-6 py-4">{user.role ? <h1>Admin</h1> : <h1>N/A</h1>}</td>
            <td className="px-6 py-4">
                <Link to={`/admin/user/${user._id}/edit`}>
                    <button>
                        Edit
                    </button> 
                </Link>
            </td>
            <td className="px-6 py-4">
                <Link to={`/admin/userlist`}>
                    <button className='mt-3 rounded-b-lg bg-fuchsia-950 text-white
                                      py-2 px-3' onClick={()=>
                    deleteHandler(user._id)
                    }>
                        Delete
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

export default UserListPage