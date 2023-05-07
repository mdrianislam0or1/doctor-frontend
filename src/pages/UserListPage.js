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
    <>
        <h1>Users</h1>
        {loading ? <Loader/> :error ? <h1>{error}</h1> : <div>
            <table className="">
            <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Admin</th>
      <th>Action</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user =>(
        <tr key={user._id}> 
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isAdmin ? <h1>Admin</h1> : <h1>N/A</h1>}</td>    
            <td>{user.role ? <h1>Admin</h1> : <h1>N/A</h1>}</td>
            <td>
                <Link to={`/admin/user/${user._id}/edit`}>
                    <button>
                        Edit
                    </button> 
                </Link>
            </td>
            <td>
                <Link to={`/admin/userlist`}>
                    <button onClick={()=>
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
    </>
  )
}

export default UserListPage