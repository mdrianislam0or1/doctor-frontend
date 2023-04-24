import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listDoctorsDetails } from '../redux/actions/doctorActions'
import {  useParams } from 'react-router-dom';
import Loader from '../components/Loader';
const Doctor = () => {
//   const {name} = props.doctor;
const params = useParams();
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(listDoctorsDetails(params.id))
},[dispatch])

const doctorDetails = useSelector(state => state.doctorDetails)
const{loading,error,doctor} = doctorDetails;

    return (
      <>
        {loading ? <Loader/> : error ? <h1>{error}</h1> :(
          <div>
            <h1>{doctor.name}</h1>
          </div>
        )}
      </>
  )
}

export default Doctor