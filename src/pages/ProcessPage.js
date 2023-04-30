import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { saveProcessAddress } from '../redux/actions/bookingActions';
import CheckoutSteps from '../components/CheckoutSteps';

const ProcessPage = () => {

    const processAddress = useSelector(state => state.procssAddress)


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

    const [description, setDecription] = useState(processAddress?.description || '');
const [name, setName] = useState(processAddress?.name || '');
const [email, setEmail] = useState(processAddress?.email || '');
const [postalCode, setPostalCode] = useState(processAddress?.postalCode || '');
const [country, setCountry] = useState(processAddress?.country || '');
const [time, setTime] = useState(processAddress?.time || '');
const [message, setMessage] = useState(null);
const [address, setAddress] = useState(processAddress?.address || '');
const [phone, setPhone] = useState(processAddress?.phone || '');
const [taka, setTaka] = useState(processAddress?.taka || '');
const [image, setImage] = useState(processAddress?.image || '');
const [date, setDate] = useState(processAddress?.date || '');


    const submitHandler = (e) => {
        e.preventDefault();

        if(!description){
            setMessage('Fill in description')
        }else{
          dispatch(saveProcessAddress({description, name , email ,postalCode,country,time,address,phone,taka,image  ,date}))
            navigate("/payment")
        }
        
        console.log(name);
        console.log(description);
        console.log(email);
        console.log(postalCode);
        console.log(country);
        console.log(time);
        console.log(address);
        console.log(phone);
        console.log(taka);
        console.log(image);
        console.log(date);
    }


  return (
    <>
            <h1>ProcessPage Page</h1>
            <CheckoutSteps step1 step2/>
            {error && <h1>{error}</h1>}
            {message && <h1>{message}</h1>}
            {loading && <Loader>{loading}</Loader>}
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">


                <form onSubmit={submitHandler}>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <input id="name" name="name" type="text" value={name} onChange={e => setName(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                    <label className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                    <input id="description" name="description" type="text" value={description} onChange={e => setDecription(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                    <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <input id="email" name="email" type="text" value={email} onChange={e => setEmail(e.target.value)} required className="block  sm:text-sm sm:leading-6" />

                    <label className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                    <input id="address" name="address" type="text" value={address} onChange={e => setAddress(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                    <label className="block text-sm font-medium leading-6 text-gray-900">Postal Code</label>
                    <input id="postalCode" name="postalCode" type="number" value={postalCode} onChange={e => setPostalCode(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                    <label className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                    <input id="country" name="country" type="text" value={country} onChange={e => setCountry(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                    <label className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                    <input id="phone" name="phone" type="text" value={phone} onChange={e => setPhone(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                    <label className="block text-sm font-medium leading-6 text-gray-900">Amount</label>
                    <input id="taka" name="taka" type="number" value={taka} onChange={e => setTaka(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                    <label className="block text-sm font-medium leading-6 text-gray-900">Image</label>
                    <input id="image" name="image" type="text" value={image} onChange={e => setImage(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                    <label className="block text-sm font-medium leading-6 text-gray-900">Date</label>
                    <input id="date" name="date" type="date" value={date} onChange={e => setDate(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                    <label className="block text-sm font-medium leading-6 text-gray-900">Time</label>
                    <input id="time" name="time" type="time" value={time} onChange={e => setTime(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
                    <button type="submit" className="flex w-full justify-center rounded-md">Contiue Process</button>
                </form>
            </div>
        </>
  )
}

export default ProcessPage