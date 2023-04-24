
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { listDoctors } from '../redux/actions/doctorActions';
import { useDispatch, useSelector } from 'react-redux';
import Doctor from './DoctorPage';
import Loader from '../components/Loader';
// import Message from '../components/Message';
// import { useEffect } from 'react';
const HomePage = () => {
    // const [doctor,setDoctor] = useState();

    // useEffect(() => {
    //     const fetchDoctor = async ()=>{
    //         const {data} = await axios.get("http://localhost:5000/api/doctors/")
    //         setDoctor(data)
    //     }
    //     fetchDoctor()
    // },[])
    // console.log(doctor)

    const dispatch = useDispatch() 

    useEffect(()=>{
        dispatch(listDoctors());
    },[dispatch])

    const doctorList = useSelector(state =>state.doctorList)
    const {loading,error,doctors} = doctorList
    return (
    <div>

        {/* {doctor.map((d,i)=>(
            <div key={d._id}>
                <h1>{d.name}</h1>
            </div>
        ))} */}

        {loading ? <Loader/>: error ? <h3>{error}</h3>: (
            doctors.map((index,dc)=>(
                <div key={index._id}>
                <Doctor doctor={doctors}/> 
                </div>
            ))
        )}
        
    </div>
  )
}

export default HomePage