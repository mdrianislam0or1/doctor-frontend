import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader';
import { getUserDetails, updateUserProfile } from '../redux/actions/userAction';

const ProfilePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //USER DETAILS  
    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails
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
            <div className='bg-yellow-200'>
                <h1>Profile Page</h1>
                {error && <h1 className='bg-red-300 text-black-300 2xl'>{error}</h1>}
                {message && <h1 className='bg-pink-300 text-black-300 2xl'>{message}</h1>}
                {success && <h1 className='bg-green-300 text-black-300 2xl'>{success} PROFILE UPDATED</h1>}
                {loading && <Loader>{loading}</Loader>}
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">


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
                        <button type="submit" className="flex w-full justify-center rounded-md">updateUser</button>
                    </form>
                </div>
            </div>


            <div className='bg-orange-500'>
                <h1 className='text-2xl font-bold text-white'> My Profile DETAILS</h1>
            </div>
        </div>
    )
}

export default ProfilePage