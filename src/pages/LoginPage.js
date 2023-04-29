import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/userAction';
import Loader from '../components/Loader';

const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector(state => state.userLogin)
  const { loading,error,userInfo } = userLogin
  const redirect = window.location.search ? window.location.search.split('=')[1] : '/'

  useEffect(()=>{
    if(userInfo){
      navigate(redirect)
    }
  },[navigate,redirect,userInfo])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email,password))

    console.log(email);
    console.log(password);

  }


  return (
    <>
    {error && <h1>{error}</h1>}
    {loading && <Loader>{loading}</Loader>}
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    
    
      <form onSubmit={submitHandler}>
        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <input id="email" name="email" type="text" value={email} onChange={e => setEmail(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
        <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <input id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required className="block  sm:text-sm sm:leading-6" />
        
        <button type="submit" className="flex w-full justify-center rounded-md">Sign in</button>
      </form>

      <div>
        <Link to={redirect ? `/register?redirect=${redirect}` : `/register`}> Register</Link>
      </div>
    </div>
    </>
  )
}

export default LoginPage