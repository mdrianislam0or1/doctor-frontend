import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../redux/actions/userAction';
import Loader from '../components/Loader';

const RegisterPage = () => {


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

        if(password !== confirmPassword){
            setMessage('Passwords do not match')
        }else{
            dispatch(register(name, role , email, password ,address,phone,image  ,date))
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

        <>
            <h1>Register Page</h1>
            {error && <h1>{error}</h1>}
            {message && <h1>{message}</h1>}
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
                    <button type="submit" className="flex w-full justify-center rounded-md">Sign in</button>
                </form>

                <div>
                    Have you an Account?
                    <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}> Register</Link>
                </div>
            </div>
        </>

    )
}

export default RegisterPage