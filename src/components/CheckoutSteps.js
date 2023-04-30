import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutSteps = ({step1, step2, step3,step4}) => {
  return (
    <div className=' grid grid-cols-4 items-center'>
        <div className=' items-center'>
            {step1 ? (
                <div className=''>
                    <Link to='/login'>Sign In</Link>
                </div>
            ):( 
                <div className=''>
                    <Link className=' appearance-none indeterminate:bg-gray-300' to='/login'>Sign up</Link>
                </div>
            )} 
        </div>
        <div className=''>
            {step2 ? (
                <div className=''>
                    <Link to='/process'>Process</Link>
                </div>
            ):( 
                <div className=''>
                    <Link className='appearance-none indeterminate:bg-gray-300' to='/process'>Process</Link>
                </div>
            )} 
        </div>
        <div className=''>
            {step3 ? (
                <div className=''>
                    <Link to='/payment'>payment</Link>
                </div>
            ):( 
                <div className=''>
                    <Link className=' appearance-none indeterminate:bg-gray-300' to='/payment'>payment</Link>
                </div>
            )} 
        </div>
        <div className=''>
            {step4 ? (
                <div className=''>
                    <Link to='/confirmbooking'>confirm booking</Link>
                </div>
            ):( 
                <div className=''>
                    <Link className=' appearance-none indeterminate:bg-gray-300' to='/confirmbooking'>confirm booking</Link>
                </div>
            )} 
        </div>
    </div>
  )
}

export default CheckoutSteps