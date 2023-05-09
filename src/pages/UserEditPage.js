import React, { useEffect, useId, useState } from 'react'
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getUserDetails,updateUser } from '../redux/actions/userAction';
import { USER_UPDATE_RESET } from '../redux/constants/userConstance';

const UserEditPage = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');

    const params = useParams()
    const userId = params.id
    console.log("User",userId)


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails
    
    const userUpdate = useSelector(state => state.userUpdate)
    const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = userUpdate

    useEffect(() => {
        if(successUpdate) {
            dispatch({type: USER_UPDATE_RESET})
            navigate('/admin/userlist')
        }else {
            if(!user?.name){
                dispatch(getUserDetails(useId))
            }else{
                setName(user?.name)
                setRole(user?.role)
                setEmail(user?.email)
                setIsAdmin(user?.isAdmin)
                setPassword(user?.password)
                setAddress(user?.address)
                setPhone(user?.phone)
                setPhone(user?.image)
                setDate(user?.date)
            }
        }
        
    }, [dispatch,navigate, useId, user,successUpdate]);



    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser({_id:userId,name,role,email,isAdmin,password,address,phone,image,date}))

        // if ( password !== confirmPassword) {
        //     setMessage('Passwords do not match')
        // } else {

        //     //DISPATCH UPDATE
        //     dispatch(updateUserProfile({
                
        //         id: user._id,
        //         name,
        //         role,
        //         email,
        //         password,
        //         address,
        //         phone,
        //         image,
        //         date

        //     }))

        // }
        // // dispatch(register(name, role , email, password ,address,phone,image  ,date))
        // // }

        console.log(name);
        console.log(role);
        console.log(email);
        console.log(password);
        console.log(address);
        console.log(phone);
        console.log(image);
        console.log(date);
        console.log(isAdmin);
    }

    return (
        <>
            <h1>Edit User Page</h1>
            <Link to='/admin/userlist' >
                User List
            </Link>

            {loadingUpdate && <Loader />}
            {errorUpdate && <h1>{errorUpdate}</h1>}
            {loading ? <Loader /> : error ? <h1>{error}</h1> : (
                <div>
                    <form onSubmit={submitHandler}>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <input id="name" name="name" type="text" value={name} onChange={e => setName(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Role</label>
                        <input id="role" name="role" type="text" value={role} onChange={e => setRole(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <input id="email" name="email" type="text" value={email} onChange={e => setEmail(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <input id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                        <input id="confirmPassword" name="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                        <input id="address" name="address" type="text" value={address} onChange={e => setAddress(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                        <input id="phone" name="phone" type="text" value={phone} onChange={e => setPhone(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Image</label>
                        <input id="image" name="image" type="text" value={image} onChange={e => setImage(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        <label className="block text-sm font-medium leading-6 text-gray-900">Date</label>
                        <input id="date" name="date" type="date" value={date} onChange={e => setDate(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                        {/* isAdmin */}


                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Admin Action
                        </label>
                        <div className="mt-2">
                            <label className="inline-flex items-center">
                                <input
                                    id="isAdmin"
                                    name="isAdmin"
                                    type="checkbox"
                                    value="isAdmin"
                                    className="form-radio h-4 w-4 text-indigo-600"
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                    checked={isAdmin}
                                    required
                                />
                                <span className="ml-2">true</span>
                            </label>
                        </div>



                        <button type="submit" className="flex w-full justify-center rounded-md">Sign in</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default UserEditPage