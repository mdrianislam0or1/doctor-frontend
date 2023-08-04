import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader';
import { getUserDetails, updateUserProfile } from '../redux/actions/userAction';
import { listMyBookeds } from '../redux/actions/bookActions';

const ProfilePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //USER DETAILS  
    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    console.log("from profile page",user)

    //USER DETAILS  
    const bookedListMy = useSelector(state => state.bookedListMy)
    const { loading:loadingBookeds, error:errorBookeds, bookeds } = bookedListMy    


    // USER LOGIN
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    // USER UPDATE VALUE
    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'));
                dispatch(listMyBookeds())
            } else {
                setName(user.name)
                setEmail(user.email)
                setRole(user.role);
                setPassword(user.password);
                setConfirmPassword(user.confirmPassword);
                setAddress(user.address);
                setPhone(user.phone);
                setImage(user.image);
                setDate(user.date);
            }
        }
    }, [navigate, userInfo,user ])

    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {

            //DISPATCH UPDATE
            dispatch(updateUserProfile({
                
                id: user._id,
                name,
                role,
                email,
                password,
                address,
                phone,
                image,
                date

            }))

        }

        console.log(name);
        console.log(role);
        console.log(email);
        console.log(password);
        console.log(address);
        console.log(phone);
        console.log(image);
        console.log(date);
    }



    return (
        <div className='grid grid-cols-2'>
            <div className=''>
                {error && <h1 className='bg-red-300 text-black-300 2xl'>{error}</h1>}
                {message && <h1 className='bg-pink-300 text-black-300 2xl'>{message}</h1>}
                {success && <h1 className='bg-green-300 text-black-300 2xl'>{success} PROFILE UPDATED</h1>}
                {loading && <Loader>{loading}</Loader>}
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

                    <div className='mb-6'>

                    
                    <form onSubmit={submitHandler}>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="name" name="name" type="text" value={name} onChange={e => setName(e.target.value)} required  />
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="role" name="role" type="text" value={role} onChange={e => setRole(e.target.value)} required  />
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="email" name="email" type="text" value={email} onChange={e => setEmail(e.target.value)} required  />
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required  />
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="confirmPassword" name="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required  />
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="address" name="address" type="text" value={address} onChange={e => setAddress(e.target.value)} required  />
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="phone" name="phone" type="text" value={phone} onChange={e => setPhone(e.target.value)} required  />
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="image" name="image" type="text" value={image} onChange={e => setImage(e.target.value)} required  />
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="date" name="date" type="date" value={date} onChange={e => setDate(e.target.value)} required  />
                        <button type="submit" className="flex w-full justify-center rounded-md">updateUser</button>
                    </form>
                    </div>
                </div>
            </div>


            <div className='py-12'>
                <h1 className='text-2xl font-bold text-white'> My Profile DETAILS</h1>
                {loadingBookeds ? <Loader/>: errorBookeds ? <h1>{errorBookeds}</h1>:(
                    <div className='relative overflow-x-auto'>
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
    <tr>
      <th scope="col" className="px-6 py-3"> Name</th>
      <th scope="col" className="px-6 py-3">Email</th>
      <th scope="col" className="px-6 py-3">Submit Date</th>
      <th scope="col" className="px-6 py-3">Taka</th>
      <th scope="col" className="px-6 py-3">Paid or Due</th>
      <th scope="col" className="px-6 py-3">Visited</th>
      <th scope="col" className="px-6 py-3">Details</th>
    </tr>
  </thead>
  <tbody>
    {bookeds.map(booked =>(
     
       
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={booked._id}>
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {booked.name}
                </td>
            <td className='px-6 py-4'>{booked.email}</td>
            <td className='px-6 py-4'>{booked.createdAt.substring(0,10)}</td>

            <td className='px-6 py-4'>{booked.taka}</td>
            <td className='px-6 py-4'>{booked.isPaid ? <p>Paid</p> :(
                <h1>NOt Paid</h1>
            )}</td>
            <td className='px-6 py-4'>{booked.isDeliverd ? booked.DeliverdAt.substring(0,10):(
                <h1> Not Visited</h1>
            )}</td>
            <td className='px-6 py-4'>
                <Link to={`/booked/${booked._id}`}>
                    <button className=" bg-fuchsia-900 text-white p-2 rounded-lg">
                        Details Button
                    </button>
                </Link>
            </td>
        </tr>

    ))}
  </tbody>
</table>
                    </div>
                )}
            
            </div>
        </div>
    )
}

export default ProfilePage